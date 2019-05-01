---
title: xv6 the first process
date: 2019-04-19 16:06:56
tags: [Operating System, xv6]
categories: Northwestern University
---

> This is the summary after I read doc of xv6, source code of xv6 and other reference. At the end of the article I will present all reference I read.

<!--more-->

[TOC]

# 0. Introduction

It is so **IMPORTANT** for us to know how actually a system is loaded from the start and how the first process is executed. We all know about system calls from the user process, but what operations are executed by OS, we still don't know. So here I want to walk through roughly procedures from how a system is loaded to what it is like when the first process is executed.

# 1. BIOS & Bootloader

## 1.1 BIOS

It is necessary to know that when we plug in the power, our computer will load BIOS and start self checking. Because at first we are in *real mode*, so we only have 20-bit addressable memory to access which is 1MB. Now CS:IP = 0xf000:0xfff0. The first instruction of BIOS is to load MBR(512KB) to 0x7c00. Then BIOS will change CS:IP to 0x0000:0x7c00. From now on, our OS is ready to take over this computer and do his work! (But the real world is more complicate, no worry, we don't care now.)

## 1.2 Bootloader

Now we have our bootloader loaded, what we gonna do now? Let's take a look about the source code.

```.S
start:												# WE WILL SEE THIS IN THE END
  cli                         # BIOS enabled interrupts; disable

  # Zero data segment registers DS, ES, and SS.
  xorw    %ax,%ax             # Set %ax to zero
  movw    %ax,%ds             # -> Data Segment
  movw    %ax,%es             # -> Extra Segment
  movw    %ax,%ss             # -> Stack Segment
	# Physical address line A20 is tied to zero so that the first PCs 
  # with 2 MB would run software that assumed 1 MB.  Undo that.
seta20.1:
  inb     $0x64,%al               # Wait for not busy
  testb   $0x2,%al
  jnz     seta20.1

  movb    $0xd1,%al               # 0xd1 -> port 0x64
  outb    %al,$0x64

seta20.2:
  inb     $0x64,%al               # Wait for not busy
  testb   $0x2,%al
  jnz     seta20.2

  movb    $0xdf,%al               # 0xdf -> port 0x60
  outb    %al,$0x60
```

We first disable interrupt and zero previous data segment registers and other related registers. Then we ENABLE A20. Why we do this? Because now we are in real mode, the ability of addressing is 20-bit address, we need to break this! let's see the world of 32-bit addressing! So we send 2 binary code to the computer to enable A20. 

From now on, we are going to see the world of 32-bit addressing. But here is a problem, in real mode, CS and IP is combined to find the physical address, which we call this is segment address. But now in 32-bit addressing world, or even 64-bit address world, it is so hard for CS and IP to do this. So we come up with another way to do that, let's call CS register a segment selector and let the value lies in CS register to tell me where to find linear address(Why not physical address? Because there is still another obstacle to overcome to get the real address, that's virtual memory part, we don't talk about that.). Here is a typical 16-bit CS register format:

```
+---------------------------------------------+
|	index(13 bits)			|		T1(1 bit) |	RPL(2)	|
+---------------------------------------------+
```

Index is the offset of where-to-find-linear-address table. And the so-called *where-to-find-linear-address* is actually stored in GDTR, or LDTR. That's why we need T1 to help us to know which one we need to go. As for RPL, it is about priority, we don't care for now.

So we need to build GDT, that's what we do next. Here is the code:

```.S
	# Switch from real to protected mode.  Use a bootstrap GDT that makes
  # virtual addresses map directly to physical addresses so that the
  # effective memory map doesn't change during the transition.
  lgdt    gdtdesc
  movl    %cr0, %eax
  orl     $CR0_PE, %eax
  movl    %eax, %cr0
  
	....
	....
	
# Bootstrap GDT
.p2align 2                                # force 4 byte alignment
gdt:
  SEG_NULLASM                             # null seg
  SEG_ASM(STA_X|STA_R, 0x0, 0xffffffff)   # code seg
  SEG_ASM(STA_W, 0x0, 0xffffffff)         # data seg

gdtdesc:
  .word   (gdtdesc - gdt - 1)             # sizeof(gdt) - 1
  .long   gdt                             # address gdt
```

It is just a temporary GDT used for bootloader. Then let's go to the 32-bit world.

```.S
 ljmp    $(SEG_KCODE<<3), $start32

.code32  # Tell assembler to generate 32-bit code now.
start32:
  # Set up the protected-mode data segment registers
  movw    $(SEG_KDATA<<3), %ax    # Our data segment selector
  movw    %ax, %ds                # -> DS: Data Segment
  movw    %ax, %es                # -> ES: Extra Segment
  movw    %ax, %ss                # -> SS: Stack Segment
  movw    $0, %ax                 # Zero segments not ready for use
  movw    %ax, %fs                # -> FS
  movw    %ax, %gs                # -> GS

  # Set up the stack pointer and call into C.
  # we set esp as $start so code and stack won't interact with each other
  movl    $start, %esp
  call    bootmain
```

After set several registers, we set %esp points to the address of $start, as I comment at the end of *start:*, we will see that at the end. Because we need to have our stack, then there is some spare space before start code, we use them as stack. Also, code goes up and stack goes down. They will never interact with each other, which is good.

Alright, now let's follow the code to see bootmain.c:

```c
void
bootmain(void)
{
  struct elfhdr *elf;
  struct proghdr *ph, *eph;
  void (*entry)(void);
  uchar* pa;

  elf = (struct elfhdr*)0x10000;  // scratch space

  // Read 1st page off disk
  readseg((uchar*)elf, 4096, 0);

  // Is this an ELF executable?
  if(elf->magic != ELF_MAGIC)
    return;  // let bootasm.S handle error

  // Load each program segment (ignores ph flags).
  ph = (struct proghdr*)((uchar*)elf + elf->phoff);
  eph = ph + elf->phnum;
  for(; ph < eph; ph++){
    pa = (uchar*)ph->paddr;
    readseg(pa, ph->filesz, ph->off);
    if(ph->memsz > ph->filesz)
      stosb(pa + ph->filesz, 0, ph->memsz - ph->filesz);
  }

  // Call the entry point from the ELF header.
  // Does not return! (see entry.S file)
  entry = (void(*)(void))(elf->entry);
  entry();
}
```

It is so hard to understand what the code does, but we know it load elf file header(which is located at 0x10000 ) to help them to load real kernel to the RAM. Let's go to *entry*.

```.S
entry:
  # Turn on page size extension for 4Mbyte pages
  movl    %cr4, %eax
  orl     $(CR4_PSE), %eax
  movl    %eax, %cr4
  # Set page directory
  movl    $(V2P_WO(entrypgdir)), %eax
  movl    %eax, %cr3
  # Turn on paging.
  movl    %cr0, %eax
  orl     $(CR0_PG|CR0_WP), %eax
  movl    %eax, %cr0

  # Set up the stack pointer.
  movl $(stack + KSTACKSIZE), %esp

  # Jump to main(), and switch to executing at
  # high addresses. The indirect call is needed because
  # the assembler produces a PC-relative instruction
  # for a direct jump.
  mov $main, %eax
  jmp *%eax

.comm stack, KSTACKSIZE
```

Oh, it sets the control registers again. then go to main()! Yeah, finally we see something familiar. Let's take a look.

```c
// Bootstrap processor starts running C code here.
// Allocate a real stack and switch to it, first
// doing some setup required for memory allocator to work.
int
main(void)
{
  kinit1(end, P2V(4*1024*1024)); // phys page allocator
  kvmalloc();      // kernel page table
  mpinit();        // detect other processors
  lapicinit();     // interrupt controller
  seginit();       // segment descriptors
  picinit();       // disable pic
  ioapicinit();    // another interrupt controller
  consoleinit();   // console hardware
  uartinit();      // serial port
  pinit();         // process table
  tvinit();        // trap vectors
  binit();         // buffer cache
  fileinit();      // file table
  ideinit();       // disk 
  startothers();   // start other processors
  kinit2(P2V(4*1024*1024), P2V(PHYSTOP)); // must come after startothers()
  																				 /
  userinit();      // first user process  <======== This is our FOCUS
  																				 \
  mpmain();        // finish this processor's setup
}
```



# The first process - initcode.S



# Reference

[1]. <http://linbo.github.io/2018/04/14/xv6-first_process_1>.

[2]. <http://ybin.cc/os/xv6-init-process/>.