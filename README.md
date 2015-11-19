# hcorner
#####－－－－－－一个jquery折角插件　　

hcorner是一个很简单的插件，其实也没有多少功能，为一块div提供一个折角的效果，本来是在个人的博客中想用的效果，就把它做成插件了，作为第一个正式上传到github上的项目，其实还很粗糙。  

##一、使用
---
###导入文件 
  
	<script src="jquery.js" type="text/javascript" charset="utf-8"></script>
	<script src="hcorner.js" type="text/javascript" charset="utf-8"></script>
###初始化设置  
	$("#content").hcorner({
        style:"out-fillet"，
		size:60,
		position:"rtop",
        color:"red"
	});
**style：**设置折角的类型，内置的三种风格，为 正常（normal），外圆角（out-fillet），内圆角(in-fillet)。不同类型，设置的参数也不一样。  
**size：**设置折角的大小，normal下，可以是一个数，也可以是[10,20]的数组。圆角情况下只允许为一个数。  
**position：**折角的位置，四种情况，rtop，ltop,rbottom,lbottom。分别对应，右上角，左上角，右下角，左下角。  
**color**：折角的颜色，内圆角情况下，这个参数无效。  

##二、效果
####normal
![image](https://github.com/hezhengjie/hcorner/raw/master/img/normal.png)  



####in-fillet  
![image](https://github.com/hezhengjie/hcorner/raw/master/img/in-fillet.png)  

####out-fillet  
![image](https://github.com/hezhengjie/hcorner/raw/master/img/out-fillet.png)
