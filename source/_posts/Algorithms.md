---
title: Algorithms
date: 2018-05-09 09:34:46
tags: algorithm
categories: summary
---

# ALGORITHM

## 1. Backtracking

## 2. DP ( learning )

## 3. BFS & DFS

## 4. Patient Sorting ( used for LIS, Longest Increasing Sequence )

1. Given an array, loop through the whole array and build piles based on two rules:
> 1) The bigger num cannot place on a lowwer num, if none of current piles can be placed on, then create a new pile;
> 2) keep number of piles as small as possible.

To get a LIS given an array, when we have former rules, we can follow these steps:
``` java
while (  ) {
    
    1. build pile and pointer that points to the current top element of the pile
    2. whenever place a new element to a pile, update its top element and its pointer to previous pile's top elements.  
    3. from the rightmost element, then go back to the first pile based on the pointer value, and we will get the target LIS.
}
```