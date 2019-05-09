---
title: Tips
date: 2019-04-25 14:05:56
tags: tips
categories: Tips
---

> Here are some tips for the errors and other issues I've encountered during my study road~
>
> Hope it helps. 😊

<!--more-->

[TOC]

# SSH beautify

After ssh to our school's server murphy, the appearance is go gross that I cannot bear anymore. So I am ready to make it like my own terminal.

I copied my .oh-my-zsh directory and .zshrc configuration file into my remote server. Then when I change me shell to zsh, it stuck. 

My friend told me it is because git will scan all the file in the server(I really don't know why git will do this and don't know if it is true that git really will do this). So 

- I deleted all git-related plugin in my .oh-my-zsh directory (`rm -rf git*`).
- I disabled all git related thing in my theme file (You can find it in .oh-my-zsh/themes/$ZSH_THEMES_zsh.theme). 
- I comment all git-related plugin in my user configuration file (.zshrc) which is git, auto jump.

Then when I run zsh in my remote server, the feeling of coming home is there. 

:-)

2019-4-25



I cannot bear the uncolored ssh terminal anymore especially that no color when I enter `git status` which makes it hard for me to see the report. So I google it and find it can be solved by enter

```git config color.status always```

Another happy thing: I've received the updated information from my intern company. Real world seems not that friendly. 😮

:-)

2019-5-9



# Github issues

## 'invalid username or password'

When I try to help Michael to git push the local repo to the remote server, the terminal prompts out the error message:

```
error: invalid username or password
fatal error: Autentication failed to ...
```

I search out all information about `fatal error` but seems nothing helps, then I notice that I have not 2FV but Mike has. So I try to cancel this property of Mike but then I realize that it is a personal settings.

So I search something about it and then find this url: https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line.

Issue solved.

: -]

2019-5-1

AND I FINALLY RECEIVE MY NEW AIRPODS!!!



# Shell script

## 