---
title: EECS_343_Operating_System
date: 2019-04-16 14:29:50
tags: [Course notes, Operating System]
categories: Northwestern University
---

> This is the first course note because OS is too important. I don't want to return my knowledge to my professor, I need to keep the knowledge around me. lol.

<!--more-->

@[toc]

[TOC]



# 1. Introduction

blah blah blah.



# 2. Processes & System calls

- **Process** is the execution unit of a CPU.
- **Limited direct execution** is a strategy to let many processes to share a single CPU as if they are all has full use of the CPU and memory(In the view of user, because you cannot tell the difference between 100ms and 100ns, lol)
- OS will divide execution part into user mode part and kernel mode part. It will prevent user processes from doing harmful operations. If user want to do something, it needs to use ***system call***.
- System calls are software interrupts(Yes, we have hardware interrupts also, like I/O interrupts, NIC interrupts and etc.)
- Because Interrupts is the only reason to cause the kernel to run, so we need set a *Timer Interrupt* to ensure that the kernel will run eventually.



# 3. Process creation and memory layout

- we use fork+exec to create a process and load a program code so that a program can be run in a process.
- *Nondeterminism* means that a programs' output is unpredictable.
- To easily switch from one process to another, we need to store some registers value in user's address space.



# 4. Scheduling

So if we have multiple processes, we need to set up a policy to share the CPU(If we only have one CPU, sad…).

- Two metrics: turnaround time & response time.
  - turnaround time: $T_{turnaround} = T_{finish} - T_{arrival}$. Optimized by Shortest Time-toComplete First (STCF).
  - response time: $T_{response} = T_{start} - T_{arrival}$. Optimized by Round Robin (RR).
- Context switch overhead is because of CPU cache missing.
- Multi-Level Feedback Queue.
  - A process goes to the highest priority queue when coming in.
  - A processes with higher priority executes first. 
  - Same priority processes executes in RR. (context switch overhead).
  - A process can use limited time of one priority queue, if use up, it should be moved to the next lower priority queue.
  - All processes will to go highest priority queue in a fixed period of time.

## 4.1 Mechanism and policy[Still not clear]

The policies what is to be done while the mechanism specifies how it is to be done. For instance, the timer construct for ensuring CPU protection is mechanism. On the other hand, the decision of how long the timer is set for a particular user is a policy decision.

The policy indicates what we need to do and the mechanism tells us how exactly we will implement this policy. Like we have several scheduling policies like FIFO, SJF, STCF, RR and MLFQ. But how to implement this, we have different ways.



# 5. Virtual Memory & Paging[🌟]

- Even given a virtual memory address, the addresses store in CR3, page directory table and page tables are still PHYSICAL address!
- Because alignment, the addresses stored in page directory table only use higher bits to store the part of real physical address(because lower part bits are zero, no need to store them), the lower bits are used as flags to indicate if the entry can be used or not.
- Here is an classic one-level and two-level paging example.(from Prof. Stephen Tarzia slides.)

![1levelpaging](https://raw.githubusercontent.com/TCoherence/TCoherence.github.io/save/source/_posts/EECS-343-Operating-System/1levelpaging.png)

![2levelpaging](https://raw.githubusercontent.com/TCoherence/TCoherence.github.io/save/source/_posts/EECS-343-Operating-System/2levelpaging.png)



# 6. Memory management optimization

Even we use virtual memory to solve some problem in view of user. But for OS, we have another problem to consider.

- Latency cost, because now we have to translate virtual memory to physical memory which takes a lot of time!
  - We introduce Translation Lookaside Buffer(TLB) caches most recent physical page translations.
- Space cost, because we create page directory table and page table to store real page table entry or page entry, which costs memory space.
  - For different demands we use different level paging, and even combine them.
- Another ways to reduce memory demands like copy-on-write fork(Project 2), demand zeroing, lazy loading and library sharing and etc.



# 7. Swapping

If we cannot keep latency low, let's increase the throughput!

- Disk is slow but large, and can be used to store RAM's overflow
- Paging and swapping work together, using the same CPU mechanisms.
- *Paging replacement policy* decides which page to be evicted.
- Thrashing is a state, in which system cannot doing anything because of swapping.
- Unified page cache handles both traditional paging and file caching to make user fell file system access is just as fast as memory access.



# 8. Free-space Managements

- Free space memory is put on a **free list**.
- Free space management policy determines:
  - Which free blocks to choose for an allocation
  - When to **coalesce** adjacent free blocks.
  - Four policies: First fit, next fit, best fit and worst fit.



# x. Project

## 1. Issues:

### 1.1 Download the source code

```
$ git clone https://USERNAME@github.com/starzia-teaching/project-1-GROUPNAME.git 
```

Notice that I added my github username to the user above, before "@github.com".  If you get an error related to `gnome-ssh-askpass` then try running 

```unsetenv SSH_ASKPASS``` 

first (or log in with X11 forwarding).

Be careful that on Internet we will see `unset SSH_ASKPASS` which may not works. But `unsetenv` works for me.

\*Update: unsetenv SSH_ASKPASS works for tcsh shell and `unset SSH_ASKPASS` works for bash and zsh shell.

