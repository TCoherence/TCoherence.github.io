---
title: LeetCode New Summary
date: 2018-06-18 21:18:39
tags: LeetCode
categories: leetcode
---

#2018-7-2

## 646. Maximum Length of Pair Chain

**Idea:**  
The tag of this problem is DP but it seems like a greedy problem and I cannot figure out how to use dp to solve it?

#2018-6-21

## 605. Can Place Flowers  

>Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.  
>Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

Example 1:
>**Input**: flowerbed = [1,0,0,0,1], n = 1  
>**Output**: True  

Example 2:
>**Input**: flowerbed = [1,0,0,0,1], n = 2  
>**Output**: False

Note:
>The input array won't violate no-adjacent-flowers rule.  
>The input array size is in the range of [1, 20000].  
>n is a non-negative integer which won't exceed the input array size.

**IDEA**:  
TWO corner cases: the first and the end of the array.

# 2018-6-20

## 855. Exam Room
>In an exam room, there are N seats in a single row, numbered 0, 1, 2, ..., N-1.  
>When a student enters the room, they must sit in the seat that maximizes the distance to the closest person.  If there are multiple such seats, they sit in the seat with the lowest number.  (Also, if no one is in the room, then the student sits at seat number 0.)  
>Return a class ExamRoom(int N) that exposes two functions: ExamRoom.seat() returning an int representing what seat the student sat in, and ExamRoom.leave(int p) representing that the student in seat number p now leaves the room.  It is guaranteed that any calls to ExamRoom.leave(p) have a student sitting in seat p.

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



# 2018-6-19  

## 854. K-Similar Strings
>Strings A and B are K-similar (for some non-negative integer K) if we can swap the positions of two letters in A exactly K times so that the resulting string equals B.  
>  
>Given two anagrams A and B, return the smallest K for which A and B are K-similar.

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


# 2018-6-18  

## 853. Car Fleet  
>N cars are going to the same destination along a one lane road.  The destination is target miles away. Each car i has a constant speed speed[i] (in miles per hour), and initial position position[i] miles towards the target along the road.  
>A car can never pass another car ahead of it, but it can catch up to it, and drive bumper to bumper at the same speed.The distance between these two cars is ignored - they are assumed to have the same position.  
>A car fleet is some non-empty set of cars driving at the same position and same speed.  Note that a single car is also a car fleet.  
>If a car catches up to a car fleet right at the destination point,it will still be considered as one car fleet.    
>
>How many car fleets will arrive at the destination?

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