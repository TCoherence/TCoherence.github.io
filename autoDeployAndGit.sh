#! /bin/bash

#Discription:
#Author:yanghanzhi
#Version:1.0
#CreateTime:2019-05-01 13:27:38

echo "==========================================="
echo "==== try to clean hexo and deploy later ==="
echo "==========================================="
# hexo clean && hexo d -g

echo "==========================================="
echo "==== Now is going to git add/commit/push =="
echo "==========================================="
git add .
git commit -m "$1"
git push

echo "==== FINISH ===="
