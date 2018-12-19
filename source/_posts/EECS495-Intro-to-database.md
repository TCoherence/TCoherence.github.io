---
title: EECS495_Intro_to_database
date: 2018-12-17 18:08:04
tags:
categories: Northwestern Unversity
---
# Intro to Database

> this is a brief summary of this course, since quarter is at the end, no excuse not to write a summary :-)
> I will summary every chapter of this course and then make a whole summary.

## 1. DB fundamentals
Database like txt file or another file storage type. It stores data, but why we design a new model to store the data not just use what we have now? Because of efficiency, database can retrieve data more quick than normal type file storage. Moreover, it can normalize the data to make them more conpact to reduce space usage which is also important for large scale system.
***Database*** is a large collection of organized data.
***Database Management System(DBMS)*** is a tool designed to manage and utilize databases.

In database, there is one important concept: **Table**, it contains several components: 

1. Schema: Descripor of the records stored in a table.
2. Attribute: A column of a table
3. Tuple: A record/row in a table
4. Field: A cell in a tuple

Here is a illustration picture:



Query Language is a specialized laguage for retrieving and manipulating data used with a DBMS, but a Query is just a command written in Query Language to DBMS.

Here is an example query language(MySQL):
```sql
SELECT department, COUNT(*)
FROM employees e
WHERE e.age > 18
GROUP BY department
```  






## 2. ERD
A direct diagram to illustrate the relationship between different entities, but what is entity? Entity is a box, containg all the information in a table. You can see it as a pictural discriptor of table. It contains attributes, and relationships with other entities.
- Entity: a rectangle
- Attribute: an oval
  - (Primary Key should be **highlighted** with a *underline*)  
- Relationship: a line with some notation
  - (To indicate 1-1, 1-M, M-M relationship)
  - (It can contains Attrs too)

Generalization Hierarchy:
- Disjoint: can be only one of them
- Overlapping: can be any of them.
- isa hierarchy: will be introduce in the future

Weak Entity:
Occurs in 1-M relationships, for example, in 2 different teams, both has a teammate called No.2, then we have to combine team name and their number to locate the person accurately.[This entity will be represented by a double rectangle]

Here is two examples, one for normal ERD and one for weak entity:

## 3. Relational Model
When we get ERD, how we change it into a relational model, which is also known as schema? Here are some solutions for different kinds of problems.
- 1-M  
  - Add the key of "1" entity, as a *foreign key* to the table of "M" entity
  - Add the attributes of the relationship type
- M-M
  - We add the key of both entities to relationship model.
- 1-1
  - This is a special case for 1-M, so it is the same.
- Weak Entity
  - This is also a special case for 1-M, so we add primary key of Strong entity as a ***foreign key*** to the weak entity.
- Subclass
  - Objected-oriented: create a model for each entity, but subclasses will contains every attributes of parent's entity.
    - This is useful for queries involving both common and special attributes.
  - Use nulls: create only one parent entity and add all subclass's attributes to parent's model.
    - This is useful for queries like special member number almost equals to number of members in superclass.   
  - ER style: Create a model for each entity, and subclass only contains parent's primary key(s)
    - This is useful for queries involving the the common attributes of the superclass.

## 4. Relational Algebra
When we have Relational Model, how we retrieve the data we want? Sometimes we can get the data just from one model, but most of the time we have to retrieve data from the combination of different models(schemas). Relational Algebra is used to do this stuff. It helps us to be more clear about the procedure to retrieve the required data.
- Union
  - $R1 \bigcup R2$
- Intersection
  - $R1 \bigcap R2$
- Difference
  - $R1 - R2$
- Projection
  - $\pi_{A1,A2, ...}(R)$, we project corresponding columns out of relation R
- Selection
  - $\sigma_{length \geq 100}(Movies)$, we select rows in Movies those length is greater or equals to 100.
- Cartesian(Cross) Product
  - $R1 \times R2$
- Theta(Conditional) Join
  - $R1 \bowtie_{C} R2$
- Natural join
  - connect 2 relations by common attributes and same field.
- Rename
  - $R1 = \rho_{R1(A1, ..., An)}(R2)$

We commonly use expression tree or relational algebra to express the data we want to retrieve. Here is 2 examples respectively.

## 5. SQL Part I

## 6. SQL Part II

## 7. Advanced SQL

## 8. Programming in SQL

## 9. PL/SQL and Functional Dependency

## 10. Normalization

## 11. Transaction

## 12. Deadlock & Isolation Level

## 13. Disk Storage & Management

## 14. Indexing

## 15. Hashed Indexing & Query Cost

## 16. Join & Multidim Modeling

## 17. MDX Queries

## 18. Graph Database