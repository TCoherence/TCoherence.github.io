---
title: EECS_368_CUDA
date: 2019-03-15 14:57:04
tags: [CUDA, Parallel, final summary]
categories: Northwestern University
---

> This course is talking about parallel computing using CUDA. We cover basic concepts like threads, blocks and grids. We have 4 labs in the class.
>
> Attention: This is just a brief summary, so it may be not clear to understand.

<!--more-->

[TOC]



## 1 Basic Idea

A thread is the unit to process code.

A block is a bunch of threads.

A grid is a bunch of block.

In CUDA, grid and block can be multi-dimension.

In memory access, one thread can have their own memory(in face assigned global memory), block have their own shared memory which can be accessed by all threads in the same block. Then comes to global memory, everyone in CUDA can access it, but it cost like 400 cycle time.

## 2 Things to be considered

### 2.1 coalesce

For paralleling programming, one thing we need to pay attention to is how to retrieve data without 1)efficiently and 2)conflict. This part I want to talk about efficiency. When we talk about retrieving data, we know that every thread will try to access the memory. However, it is only possible for one thread to access the memory if using the naive memory access. We want to retrieve data as much as possible. Is there one way that we can retrieve all the data out from the memory with single memory read?

The answer is yes, we can coalesce data needed by those threads in a continuous memory space. Suppose every thread needs 1 int data which cost 4 bytes in c++. In one warp, we can retrieve $4 \times 32 = 128bytes$ from the memory, and assign different value to different thread.

This is why we most use CUDA to process **array** data not something like objects.

### 2.2 bank conflict

In CUDA, the SM(stream process) will load a warp of threads to execute the code. The size of one warp is usually 32. As we have talked in the previous part, one time memory access may retrieve 32*data_size data. How we load this data, we load them from *bank*. Bank is not a data structure, but a way or a clarification how we load data from **shared memory**.

Bank can have different width, we don't care about this now. Remember, bank is only discussed in a SINGLE warp, also, only in shared memory.

Because every thread in a warp wants to read data, they will load data just from different bank. If we have 32 threads in a warp, we will have 32 banks to be mapped.

How bank classify data? For a continuous bytes of data, say 64bytes. Suppose warp size is 32. Now bytes 1, 2, 3,…, 32 will be *classified* in bank 0, 1, 2,…, 31, and bytes 33, 34, 35,…,64 will be *classified* in bank 0, 1, 2,…,31.

Why we say classified not assigned, it is because even though bytes 0 and bytes 33 is classified in the same bank, but they still stored in the shared memory, when thread asks for bytes 0, the data of bytes 0 will be loaded into bank 0 and used by the thread. So in this case, if there is another thread asks for bytes 33, then bytes 33 also needs to be loaded to bank 0. Then comes to a bank conflict.

Bank conflict usually because of even times stride like 2, 4, and so on. Sometimes we can avoid this but sometimes we cannot, so we will add padding to move the real data backward to avoid bank conflict. Like previous scenario, if we add one more padding after every 32 bytes data, the bytes "33" now is bytes 34 and will be loaded in bank 1, not bank 0.



### 2.3 Tiling

Even we can load very large data into CUDA device, the memory of CUDA is limited. So if the source data size is too large we have to tile the original data into small pieces, and load them one by one to CUDA device, and integrate them at last.

Besides, those need repeating operation data also need to be tiled into shared memory to be speeded up.

## 3 Lab in this course

### 3.1 Matrix Multiplication

### 3.2 Tiled Matrix Multiplication

### 3.3 Optimizing Histograms

### 3.4  Parallel Prefix Scans

This is the most interesting lab, I haven't realized we can use recursive calling in CUDA, though I should have realized this….