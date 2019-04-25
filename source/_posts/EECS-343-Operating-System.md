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

blah blah blah

# 2. Processes & System calls

# 3. Process creation and memory layout

# 4. Scheduling

## 4.x Mechanism and policy

The policies what is to be done while the mechanism specifies how it is to be done. For instance, the timer construct for ensuring CPU protection is mechanism. On the other hand, the decision of how long the timer is set for a particular user is a policy decision.

The policy indicates what we need to do and the mechanism tells us how exactly we will implement this policy. Like we have several scheduling policies like FIFO, SJF, STCF, RR and MLFQ. But how to implement this, we have different ways.

# 5.Virtual Memory & Paging



# x. Project

## Issues:

### Download the source code

```
$ git clone https://USERNAME@github.com/starzia-teaching/project-1-GROUPNAME.git 
```

Notice that I added my github username to the user above, before "@github.com".  If you get an error related to `gnome-ssh-askpass` then try running 

```unsetenv SSH_ASKPASS``` 

first (or log in with X11 forwarding).

Be careful that on Internet we will see `unset SSH_ASKPASS` which may not works. But `unsetenv` works for me.

