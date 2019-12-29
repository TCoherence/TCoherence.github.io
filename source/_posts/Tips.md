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

After ssh to our school's server *murphy*, the appearance is go gross that I cannot bear anymore. So I am ready to make it like my own terminal.

I copied my .oh-my-zsh directory and .zshrc configuration file into my remote server. Then when I change me shell to zsh, it stuck. 

My friend told me it is because git will scan all the file in the server(I really don't know why git will do this and don't know if it is true that git really will do this). So 

- I deleted all git-related plugin in my .oh-my-zsh directory (`rm -rf git*`).
- I disabled all git related thing in my theme file (You can find it in .oh-my-zsh/themes/$ZSH_THEMES_zsh.theme). 
- I comment all git-related plugin in my user configuration file (.zshrc) which is git, auto jump.

Then when I run zsh in my remote server, the feeling of coming home is there. 

:-)

2019-4-25



I cannot bear the uncolored ssh terminal anymore especially that no color when I enter `git status` which makes it hard for me to see the report. So I google it and find it can be solved by enter

`git config color.status always`

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



# Hexo Configs & Frequent Problems

> Here are some useful configurations for hexo.

1. beautify the article with shadow

```css
/* path:themes/next/source/css/_custom/custom.styl */
.post {
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 25px;
  -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
  -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
 }
/*
Get from: https://www.jianshu.com/p/d34e9531cfce
*/
```

2. Avatar rotation

```css
/* path:themes/next/source/css/_custom/custom.styl */
.site-author-image {
  display: block;
  margin: 0 auto;
  padding: $site-author-image-padding;
  max-width: $site-author-image-width;
  height: $site-author-image-height;
  border: site-author-image-border-color;
  /* start*/
  border-radius: 50%
  webkit-transition: 1.4s all;
  moz-transition: 1.4s all;
  ms-transition: 1.4s all;
  transition: 1.4s all;
  /* end */
}
/* start */
.site-author-image:hover {
  background-color: #55DAE1;
  webkit-transform: rotate(360deg) scale(0.9);
  moz-transform: rotate(360deg) scale(0.9);
  ms-transform: rotate(360deg) scale(0.9);
  transform: rotate(360deg) scale(0.9);
}
/* end */
/*
Get from: https://www.jianshu.com/p/d34e9531cfce
*/
```

3. Social icons don't appear

```yml
social:
  GitHub: https://github.com/TCoherence || github
  E-Mail: mailto:hanzhiyang2019@gmail.com || envelope
  #Google: https://plus.google.com/yourname || google
  Twitter: https://twitter.com/yang_hanzhi || twitter
  FB Page: https://www.facebook.com/profile.php?id=100025563873836 || facebook
  #VK Group: https://vk.com/yourname || vk
  #StackOverflow: https://stackoverflow.com/yourname || stack-overflow
  #YouTube: https://youtube.com/yourname || youtube
  #Instagram: https://instagram.com/yourname || instagram
  #Skype: skype:yourname?call|chat || skype
```

The final code should be something like this. 'social' cannot be commented out.

4. Insert an image in a post

- `![](/images/image.jpg)`
- `![](image.jpg)`(need to set *past_asset_folder* attribute to true in **_config.yml**)

5. 给文章添加 TOC

   

6. xcrun error: path error

```
If you are facing an error like that on new MacOS version.

xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

It means that you need to install XCode command line, open a Terminal and run this command:

$ xcode-select --install

from: https://gist.github.com/gaquino/87bdf0e6e852e445c0489379d3e9732a
```

7. link to another post on hexo

   `{% post_link xv6-the-first-process xv6-the-first-process %}`

   first *xv6-the-first-process* is the name of your post and the second one is the link name for your post. 

8. 添加comment（gitalk, disqus, valine,最终选择了gitalk）

   主要参考：https://asdfv1929.github.io/2018/01/20/gitalk/

   - issue1: Error: Not found 

     ![image-20191228180425473](Error.png)

     似乎是需要一点时间来完成配置。

   - issue2: ***Related [Issues](https://github.com/TCoherence/TCoherence.github.io/issues) not found Please contact @TCoherence to initialize the comment***

     一度以为是next版本问题，其实是OAuth里面的URL的问题。。。不能用http，而是**https**，原因暂时未知。

   - 

9. Sort posts by updated time

   Modify _config.yml file in root folder

   ```yml
   # Home page setting
   # path: Root path for your blogs index page. (default = '')
   # per_page: Posts displayed per page. (0 = disable pagination)
   # order_by: Posts order. (Order by date descending by default)
   index_generator:
       path: ''
       per_page: 10
       order_by: -updated # <=== Here is the modification
   ```

10. 

