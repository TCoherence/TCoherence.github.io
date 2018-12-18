---
title: HexoConfig
date: 2018-12-17 16:53:51
tags:
categories:
---
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