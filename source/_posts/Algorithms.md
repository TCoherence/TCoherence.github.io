---
title: Algorithms
date: 2018-05-09 09:34:46
tags: algorithm
categories: summary
---

# ALGORITHM

## 1. Backtracking

## 2. DP ( learning ) 
The following link is very helpful to understand the kernel of DP and what's dp and how to use it.  
[MIT Dynamic Programming](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-20-dynamic-programming-ii-text-justification-blackjack/)  

Normally, when it comes to brute force, it involves exponential time performance. Take subsets as an example, for every single elements, we have  to decide use it or not, so for the length n, we have 2 to n possibilites which is exponential. BUT, in some problems, we can divide them into subproblems, and subproblems will always show up with recursion, in this way, we can make code clearlier and conciser. However, subproblems can be repeating, in topological way, it is said that the topological structrue is the same. So if we take no steps to avoid this or optimize the performance, the time performance is still bad.  
Then that is the key of Dynamic Programming, we store every subproblem's result in memory, every time we encounter a repeating subproblem, we just use the result and apparently we reduce the time consumption down to **O(1)**

In the former link, the lecturer has listed 5 steps to use dp to solve problems:  
1. find/define subproblems 
2. guessing, how many choices I have  ( #choices )
3. relate subproblems ( time/subproblem)
4. recurse and memorized / build up DP table ( total time )
5. solve original problem.





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