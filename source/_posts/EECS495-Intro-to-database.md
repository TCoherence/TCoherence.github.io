---
title: EECS495_Intro_to_database
date: 2018-12-17 18:08:04
tags: [database, final summary]
categories: Northwestern University
---
# Intro to Database

> this is a brief summary of this course, since quarter is at the end, no excuse not to write a summary :-)
> I will summary every chapter of this course and then make a whole summary. 

<!--more-->
## DB fundamentals
Database like txt file or another file storage type. It stores data, but why we design a new model to store the data not just use what we have now? Because of efficiency, database can retrieve data more quick than normal type file storage. Moreover, it can normalize the data to make them more conpact to reduce space usage which is also important for large scale system.
***Database*** is a large collection of organized data.
***Database Management System(DBMS)*** is a tool designed to manage and utilize databases.

In database, there is one important concept: **Table**, it contains several components: 

1. Schema: Descripor of the records stored in a table.
2. Attribute: A column of a table
3. Tuple: A record/row in a table
4. Field: A cell in a tuple

Here is a illustration picture:

![illustration picture](https://raw.githubusercontent.com/TCoherence/TCoherence.github.io/save/source/_posts/EECS495-Intro-to-database/Screen%20Shot%202018-12-17%20at%206.37.56%20PM.png)

Query Language is a specialized laguage for retrieving and manipulating data used with a DBMS, but a Query is just a command written in Query Language to DBMS.

Here is an example query language(MySQL):
```sql
SELECT department, COUNT(*)
FROM employees e
WHERE e.age > 18
GROUP BY department
```



## ERD
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

Here is a example, including both normal ERD and weak entity:

![example](https://raw.githubusercontent.com/TCoherence/TCoherence.github.io/save/source/_posts/EECS495-Intro-to-database/Screen%20Shot%202018-12-18%20at%2010.52.16%20PM.png)

## Relational Model
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

## Relational Algebra
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
- Division
  - $R = R1 / R2$

We commonly use expression tree or relational algebra to express the data we want to retrieve. Here is 2 examples respectively.

QUERY : The names of all the bars that are either on Maple
St. or sell Bud for less than $3.
![expression tree](https://raw.githubusercontent.com/TCoherence/TCoherence.github.io/save/source/_posts/EECS495-Intro-to-database/Screen%20Shot%202018-12-18%20at%2010.47.03%20PM.png)

QUERY : patient IDs that have seen a pediatrician
we have scheme as follows:  
hospital(hosp_id, h_name, h_addr)  
doctor(doctor_id, d_name, d_specialty, hosp_id)  
patient(patient_id, p_name, p_dob, doctor_id)
$\pi_{patient}(patients \bowtie_{doctor\_id}\sigma_{specialty='pediatrician'}(doctors))$

## SQL Part I
Now we know about the relationships between entities and how to retrieve the data in logical way. Now we need to create real entity which now is called **Table**.  
Here is an example of creating a table in sql:  
```sql
CREATE TABLE movie (
  movie_id NUMBER PRIMARY KEY,
  name CHAR(20) NOT NULL,
  city VARCHAR(20) NOT NULL,
  state CHAR(2) NOT NULL,
  release_date DATE,
  CONSTRAINT release_date_contraint CHECK (release_date between '01-Jan-1980' and '31-Dec-1989')
)
```
In the above code, we notice that there are some UPPERCASE WORDS like PRIMARY KEY, NOT NULL, CONSTRAINT. Those are called **Integrity Constraints**(IC). NUMBER, CHAR, VARCHAR and DATE are **Date Type**
## SQL Part II

## Advanced SQL

## Programming in SQL

## PL/SQL and Functional Dependency

## Normalization

## Transaction

## Deadlock & Isolation Level

## Disk Storage & Management

## Indexing

## Hashed Indexing & Query Cost

## Join & Multidim Modeling

## MDX Queries

## Graph Database