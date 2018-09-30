---
title: LeetCode Summary ByTag
date: 2018-9-19 16:21:32
tags: LeetCode
categories: summary
---

# LeetCode Summary By Tag
> To make it easier to review the leetcode, classify different into groups according to its tags.

<!-- TOC -->

- [LeetCode Summary By Tag](#leetcode-summary-by-tag)
    - [1. Array](#1-array)
        - [1. Two Sum](#1-two-sum)
        - [11. Container With Most Water](#11-container-with-most-water)
        - [15. 3Sum](#15-3sum)
        - [16. 3Sum Closest](#16-3sum-closest)
        - [18. 4Sum](#18-4sum)
        - [26. Remove Duplicates from Sorted Array](#26-remove-duplicates-from-sorted-array)
        - [27. Remove Element](#27-remove-element)
        - [41. First Missing Positive](#41-first-missing-positive)
        - [42. Trapping Rain Water](#42-trapping-rain-water)
    - [2. Number](#2-number)
    - [3. List](#3-list)

<!-- /TOC -->
<!--more-->
## 1. Array

### 1. Two Sum
Discription: [Click Here](https://leetcode.com/problems/two-sum/description/)
**Idea**:  
a. loop through + binary search; O(N)*O(logN) = O(NlogN) time performance, O(1) space cose;  
b. HashMap to record the whole array then loop through the array.
O(N) time performance and O(N) space cose;

### 11. Container With Most Water
Discription: [Click Here](https://leetcode.com/problems/container-with-most-water/description/)
**Idea:**  
two pointers, move the lower one to the higher one, update localMax and globalMax.

### 15. 3Sum
Discription: [Clikc Here](https://leetcode.com/problems/3sum/description/)
**Idea:**  
3 pointers, a, b, and c.  
***FIRST***, sort the array.  
a is used to loop throught the first num, b and c are used to scan the remaining array element from two sides. which leads to O(N) time. With O(N) time to **LOOP** throught the whole array, we use up to $O(N^2)$ time.

### 16. 3Sum Closest
Discription: [Click Here](https://leetcode.com/problems/3sum-closest/description/)
**Idea:**
Same idea with #15

### 18. 4Sum
Discription: [Click Here](https://leetcode.com/problems/4sum/description/)
**Idea:**
Same idea with #15, but need 4 pointers and cost $O(N^3)$ time.

### 26. Remove Duplicates from Sorted Array
Discription: [Click Here](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
**Idea:**  
In-place, so we can record how many repeated numbers in this array and move the first of duplicates or non-duplicate forward.

### 27. Remove Element
Discription: [Click Here](https://leetcode.com/problems/remove-element/description/)
**Idea:**
Same with #26

### 41. First Missing Positive
Discription: [Click Here](https://leetcode.com/problems/first-missing-positive/description/)
**Idea:**
Build an array to record the presence of positive integer. Loop the whole array to update this array. Then loop this array from start and we will find the first missing positive number. This costs O(N) time.

### 42. Trapping Rain Water
Discription: [Click Here](https://leetcode.com/problems/trapping-rain-water/description/)
**Idea:**  
1) Builde 2 pointers, left and right. move the lower one to higher one;
2) we need to update trapped water in a way that lower one stop once encounter a higher one. Say that left one is lower one, we move a temp pointer to right and every movement we see if current value(where pointer points) is lower than the value left pointer points. 
3) If it is then update left pointer to temp pointer.
4) If not, return to 2.


## 2. Number

## 3. List