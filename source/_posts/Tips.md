---
title: Tips
date: 2019-04-25 14:05:56
tags: tips
categories: Tips
---



# SSH beautify

After ssh to our school's server murphy, the appearance is go gross that I cannot bear anymore. So I am ready to make it like my own terminal.

I copied my .oh-my-zsh directory and .zshrc configuration file into my remote server. Then when I change me shell to zsh, it stuck. 

My friend told me it is because git will scan all the file in the server(I really don't know why git will do this and don't know if it is true that git really will do this). So 

- I deleted all git-related plugin in my .oh-my-zsh directory(`rm -rf git*`) 
- I disabled all git related thing in my theme file(You can find it in .oh-my-zsh/themes/$ZSH_THEMES_zsh.theme). 
- I comment all git-related plugin in my user configuration file(.zshrc) which is git, auto jump.

Then when I run zsh in my remote server, the feeling of coming home is there. 

:-)

2019-4-25