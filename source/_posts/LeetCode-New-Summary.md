---
title: LeetCode New Summary
date: 2018-06-18 21:18:39
tags: LeetCode
categories: leetcode
---
# LeetCode New Summary

[TOC]  

**This is a review of every lc problems I have done.**

# 0 - 100

## 1. Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

>Example:  
>Given nums = [2, 7, 11, 15], target = 9,  
>Because nums[0] + nums[1] = 2 + 7 = 9,
>return [0, 1].

**IDEA**:  
a. sorted -> binary search -> O(N) to search first num and O(logN) which leads to O(NlogN) in total and O(1) space cost.  
b. use HashMap, O(N) time cost and O(N) space cose.

## 2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:  
>Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)  
>Output: 7 -> 0 -> 8  
>Explanation: 342 + 465 = 807.

**IDEA:**  
a. one temp var to record carry bit.

## 3. Longest Substring Without Repeating Characters
Given a string, find the length of the longest substring without repeating characters.

>Example 1:  
>Input: "abcabcbb"
>Output: 3 
>Explanation: The answer is "abc", with the length of 3. 
>Example 2:
>Input: "bbbbb"
>Output: 1
>Explanation: The answer is "b", with the length of 1.
>Example 3:
>Input: "pwwkew"
>Output: 3
>Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.  

**IDEA:**
record every char's index, once repeat, update globalMaxLength and localMaxLength;

## 4. Median of Two Sorted Arrays
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.

>Example 1:
>nums1 = [1, 3]
>nums2 = [2]
>The median is 2.0
>Example 2:
>nums1 = [1, 2]
>nums2 = [3, 4]
>The median is (2 + 3)/2 = 2.5

**IDEA:**
**need to be write in detail**
The median of an array is a number that divide the array into 2 subarray, every num in the left array is smaller than the median and every num in the right array is larger than the median.



## 91. Decode Ways
A message containing letters from A-Z is being encoded to numbers using the following mapping:

>'A' -> 1  
'B' -> 2  
...  
'Z' -> 26  

Given a **non-empty** string containing only digits, determine the total number of ways to decode it.

**Example 1:**  
>Input: "12"  
Output: 2  
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

**Example 2:**  
>Input: "226"  
Output: 3  
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).  

**IDEA:**  
DP solution:  
Apparently, for every digit we need to see if it is valid([1 ~ 9]), then the digit comes after need to do the check too([10 ~ 26]), so we have 2 choices for every digit except for some corner cases.  
Let's consider buttom-up solution, which is from right to left in this problem. For i-th digit, if it is valid, then #the i-th total decode ways += total (i+1)-th decode ways. If (i_i+1) two digits are valid, then #the i-th total decode ways += (i+2)-th decode ways. This is showed as follows:  
DP[i] = DP[i + 1] + DP[i + 2]  



# 100 - 200
## 104. Maximum Depth of Binary Tree
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Note:** A leaf is a node with no children.

**IDEA:**  
dfs, recursive solution

## 136. Single Number [E]
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

**Example 1:**  
>Input: [2,2,1]  
>Output: 1

**Example 2:**
>Input: [4,1,2,1,2]  
>Output: 4

**IDEA:**  
linear time -> two loop, one loop to calculate the freq and one loop to find the single number.
If require no extra memory, we can use ^ oprator, because a ^ a ^ b = b.

# 200 - 300
## 274. H-Index
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.  
According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

**Example:**

>Input: citations = [3,0,6,1,5]  
>Output: 3   
>Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with **at least** 3 citations each and the remaining two with **no more than** 3 citations each, her h-index is 3.

**IDEA:**  
Solution 1:  
sort the array, back to front.  
Time Performance: O(nlogn)  
Space Performance: O(1)

Solution 2:
The key of this problem is that the range of h is [0, N], so we can use bucket index to present potential h-idx and the value in bucket to denote the number of papers cited more than bucket index.  
So one loop for original array to update bucket array and one loop for bucket array to find h-idx.
Time Performance: O(N)
Space Performance: O(N)

## 292. Nim Game
You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

**IDEA:**  
it is important to find that it is relative to those multiples of 4.


# 300 - 400
## 337. House Robber III 
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

**IDEA:**  
naive recursive solution -> pruning solution(using HashMap) -> DP solution(return results under 2 different conditions)

## 344. Reverse String [E]
Write a function that takes a string as input and returns the string reversed.

**Example:**  
Given s = "hello", return "olleh".

**IDEA:**  
easy swap


# 400 - 500 
## 461. Hamming Distance [Easy]
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

**IDEA:**  
Integer.bitCount()

## 463. Island Perimeter
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

**IDEA:**  
THIS IS ONLY ONE ISLAND. So go throught the whole 2D-array, for every '1', we check its surrounding value and calculate its perimeter, and update the how perimeter.

# 500 - 600
## 513. Find Bottom Left Tree Value [Medium]
Given a binary tree, find the leftmost value in the last row of the tree.

**IDEA:**
Easy BFS and push node in left to right order. Then store the val from the first out node.

## 561. Array Partition I
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

**IDEA:**  
greedy: sort then sum one out of every 2 numbers.

# 600 - 700 
## 605. Can Place Flowers  

Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.  
Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

**Example 1:**
>**Input**: flowerbed = [1,0,0,0,1], n = 1  
>**Output**: True  

**Example 2:**
>**Input**: flowerbed = [1,0,0,0,1], n = 2  
>**Output**: False

Note:
>The input array won't violate no-adjacent-flowers rule.  
>The input array size is in the range of [1, 20000].  
>n is a non-negative integer which won't exceed the input array size.

**IDEA**:  
TWO corner cases: the first and the end of the array.

## 637. Average of Levels in Binary Tree
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

**IDEA:**  
BFS and calculate average, be careful about the result date type, int is not eligible


## 646. Maximum Length of Pair Chain

**Idea:**  
The tag of this problem is DP but it seems like a greedy problem and I cannot figure out how to use dp to solve it?

## 657. Judge Route Circle [Easy]
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

**IDEA:**  
Easy, no 

## 693. Binary Number with Alternating Bits
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

**Example 1:**
>Input: 5  
Output: True  
Explanation:  
The binary representation of 5 is: 101

**Example 2:**
>Input: 7  
Output: False  
Explanation:  
The binary representation of 7 is: 111.

**Example 3:**
>Input: 11  
Output: False  
Explanation:  
The binary representation of 11 is: 1011.

**Example 4:**
>Input: 10  
Output: True  
Explanation:  
The binary representation of 10 is: 1010.

**IDEA:**  
1. O(32) solution, check every bit
2. n -> 32-bit '1' -> n&(n + 1) == 0 ?

## 698. Partition to K Equal Sum Subsets
Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

**Example 1:**
>Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
>Output: True
>Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

Note:  
* 1 <= k <= len(nums) <= 16.
* 0 < nums[i] < 10000.

**IDEA:**  
ONE OF THE MOST DISGUSTING PROBLEM:
Hints : buckets. 

# 700 - 800
## 766. Toeplitz Matrix
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

**IDEA:**  
brute force. We have to check every elements.




# 800 - 900

## 811. Subdomain Visit Count [Easy]
A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

**Example 1:**  
>Input: 
>["9001 discuss.leetcode.com"]  
>Output:    
>["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
>Explanation:   
>We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

**Example 2:**
>Input:  
>["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]  
>Output:   
>["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]  
>Explanation:   
>We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times. For the subdomains, we

**IDEA:** 
Easy HashMap

## 852. Peak Index in a Mountain Array
Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

**Example 1:**
>Input: [0,1,0]  
>Output: 1

**Example 2:**
>Input: [0,2,1,0]  
>Output: 1

Note:
* 3 <= A.length <= 10000
* 0 <= A[i] <= 10^6
* A is a mountain, as defined above.

**IDEA:**  
Because it is definitely a mountain, we can binary search the topest value in this array and return its index.

## 853. Car Fleet  
N cars are going to the same destination along a one lane road.  The destination is target miles away. Each car i has a constant speed speed[i] (in miles per hour), and initial position position[i] miles towards the target along the road.  
A car can never pass another car ahead of it, but it can catch up to it, and drive bumper to bumper at the same speed.The distance between these two cars is ignored - they are assumed to have the same position.  
A car fleet is some non-empty set of cars driving at the same position and same speed.  Note that a single car is also a car fleet.  
If a car catches up to a car fleet right at the destination point,it will still be considered as one car fleet.    

How many car fleets will arrive at the destination?

**Example 1:**
>**Input**: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]  
**Output:** 3  
**Explanation:**  
The cars starting at 10 and 8 become a fleet, meeting each other at 12.  
The car starting at 0 doesn't catch up to any other car, so it is a fleet by itself.  
The cars starting at 5 and 3 become a fleet, meeting each other at 6.  
Note that no other cars meet these fleets before the destination, so the answer is 3.

**Note:**  
1. 0 <= N <= 10 ^ 4
2. 0 < target <= 10 ^ 6
3. 0 < speed[i] <= 10 ^ 6
4. 0 <= position[i] < target
5. All initial positions are different.

**IDEA:**  
We need to find the fleets, so we need to know if one car will catch another one. To simplify the process, we sort the original position array, let's say in ascending sequence, then we have a new array, let's name it *pos*. Then the end of *pos* is closest to the target and the head of *pos* is farest to the target. 
Now from the end of the array, we calculate the time that every car need to take to reach the target, if one car ***A*** firstly is ahead of car ***B*** but the time of car ***A*** need to take to reach the target is larger than ***B***'s time, it means that car ***B*** catches car ***A*** in no doubt, which means they are views as one car fleet.
So the key of this solution is:
1. sort position
2. calculate the time consumption
3. compare the time consumption from the end to the head with current time and determine the occurence of car catching.

**[CODE](https://github.com/TCoherence/LeetCodeExercise/blob/master/853.%20Car%20Fleet.java)**

## 854. K-Similar Strings
Strings A and B are K-similar (for some non-negative integer K) if we can swap the positions of two letters in A exactly K times so that the resulting string equals B.  
 
Given two anagrams A and B, return the smallest K for which A and B are K-similar.

**Example 1:**
>Input: A = "ab", B = "ba"  
>Output: 1  

**Example 2:**  
>Input: A = "abc", B = "bca"  
>Output: 2  

**Example 3:** 
>Input: A = "abac", B = "baca"  
>Output: 2  

**Example 4:** 
>Input: A = "aabc", B = "abca"  
>Output: 2  

**Note:**
>1. <= A.length == B.length <= 20
>2. A and B contain only lowercase letters from the set {'a', 'b', 'c', 'd', 'e', 'f'}

**IDEA**:  
When it comes to the shortest distance or shortest of something, we need to consider BFS first. After all, it is the most common algs to solve this problem.  
In this problem, we use BFS to guarantee the result is shortest, then we swap every pair in A to reach B and *offer (because in java queue, the func is offer())* all the results to queue then use BFS to solve it.

**[CODE](https://github.com/TCoherence/LeetCodeExercise/blob/master/854.%20K-Similar%20Strings.java)**  

## 855. Exam Room
In an exam room, there are N seats in a single row, numbered 0, 1, 2, ..., N-1.  
When a student enters the room, they must sit in the seat that maximizes the distance to the closest person.  If there are multiple such seats, they sit in the seat with the lowest number.  (Also, if no one is in the room, then the student sits at seat number 0.)  
Return a class ExamRoom(int N) that exposes two functions: ExamRoom.seat() returning an int representing what seat the student sat in, and ExamRoom.leave(int p) representing that the student in seat number p now leaves the room.  It is guaranteed that any calls to ExamRoom.leave(p) have a student sitting in seat p.

Example 1:
>**Input:** ["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]  
>**Output:** [null,0,9,4,2,null,5]
>**Explanation:**  
>ExamRoom(10) -> null  
>seat() -> 0, no one is in the room, then the student sits at seat number 0.  
>seat() -> 9, the student sits at the last seat number 9.  
>seat() -> 4, the student sits at the last seat number 4.  
>seat() -> 2, the student sits at the last seat number 2.  
>leave(4) -> null  
>seat() -> 5, the student​​​​​​​ sits at the last seat number 5.  
​​

Note:
>1. 0 <= N <= 10^9
>2. ExamRoom.seat() and ExamRoom.leave() will be called at most 10^4 times across all test cases.
>3. Calls to ExamRoom.leave(p) are guaranteed to have a student currently sitting in seat number p.

**IDEA:**  
We notice that the range of N is from 0 to 10^9 so it is not wise to create an array to store every seat's state. We can use segment to present the seat's state and two points of a segment are both occupied.
In this case, the corner case are the first seat and the last point because their segments have just one point and the other is the boundry of the array which we need pay attention to.

**Solution:**  
Keyword: TreeSet, Point, Priority(Haven't been reached, do it in few days later)  

**[CODE](https://github.com/TCoherence/LeetCodeExercise/blob/master/855.%20Exam%20Room.java)**  










