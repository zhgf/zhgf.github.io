<?php
  include_once $_SERVER['DOCUMENT_ROOT'].'/common/jssdk.php';
  $timestamp = time();
  $token = md5($timestamp.'design1999');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>金牌厨柜-2018上海展</title>
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"/>
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black" /> 
	<meta name="format-detection" content="telephone=no" /> 
	<meta name="format-detection" content="email=no" /> 
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="css/index.css?v=1.1">
	<script type="text/javascript" src="js/163scale.js"></script>
</head>
<body>

<div class="guide">
	<img src="images/guide_03_01.jpg">
	<img src="images/guide_03_03.jpg">
	<div style="position: relative;">
		<img src="images/guide_03_04.jpg">
		<div id="slider1" class="guide-slider">
			<div class="bd">
				<ul>
					<li><img src="images/s_1_1.jpg"/></li>
					<li><img src="images/s_1_2.jpg"/></li>
					<li><img src="images/s_1_3.jpg"/></li>
					<li><img src="images/s_1_4.jpg"/></li>
				</ul>
			</div>
			<div class="icon-more"></div>
			<div class="slider-title">
				<a href="http://720yun.com/t/053jtrtvOw6?scene_id=13859690">
					<img src="images/s_title_01.jpg">
				</a>
			</div>
		</div>
	</div>
	<img src="images/guide_03_05.jpg">
	<div style="position: relative;">
		<img src="images/guide_03_06.jpg">
		<div id="slider2" class="guide-slider">
			<div class="bd">
				<ul>
					<li><img src="images/s_2_1.jpg"/></li>
					<li><img src="images/s_2_2.jpg"/></li>
					<li><img src="images/s_2_3.jpg"/></li>
					<li><img src="images/s_2_4.jpg"/></li>
				</ul>
			</div>
			<div class="icon-more"></div>
			<div class="slider-title">
				<a href="http://720yun.com/t/053jtrtvOw6">
					<img src="images/s_title_02.jpg">
				</a>
			</div>
		</div>
	</div>
	<img src="images/guide_03_07.jpg">
	<div style="position: relative;">
		<img src="images/guide_03_08.jpg">
		<div id="slider3" class="guide-slider">
			<div class="bd">
				<ul>
					<li><img src="images/s_3_1.jpg"/></li>
					<li><img src="images/s_3_2.jpg"/></li>
					<li><img src="images/s_3_3.jpg"/></li>
					<li><img src="images/s_3_4.jpg"/></li>
				</ul>
			</div>
			<div class="icon-more"></div>
			<div class="slider-title">
				<a href="http://720yun.com/t/488j57hOvm7?scene_id=12541814">
					<img src="images/s_title_03.jpg">
				</a>
			</div>
		</div>
	</div>

	<div class="foot-fix">
		<div class="guide-foot flexbox">
			<a class="flexchild" href="guide1.php"></a>
			<a class="flexchild" href="guide2.php"></a>
			<a class="flexchild" href="guide3.php"></a>
			<a class="flexchild" href="http://www.g1999.com/zs/index.php?g=&m=m&a=index"></a>
		</div>
	</div>
	
</div>

<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/TouchSlide.1.1.js"></script>
<script type="text/javascript">
$(function(){

TouchSlide({ 
	slideCell:"#slider1",
	mainCell:".bd ul", 
	effect:"leftLoop", 
	autoPlay:true,//自动播放
});
TouchSlide({ 
	slideCell:"#slider2",
	mainCell:".bd ul", 
	effect:"leftLoop", 
	autoPlay:true,//自动播放
});
TouchSlide({ 
	slideCell:"#slider3",
	mainCell:".bd ul", 
	effect:"leftLoop", 
	autoPlay:true,//自动播放
});

})
</script>

<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script type="text/javascript">
wx.config({
  debug:false,
  appId:'<?=$signPackage["appId"]?>',
  timestamp:<?=$signPackage["timestamp"]?>,
  nonceStr:'<?=$signPackage["nonceStr"]?>',
  signature:'<?=$signPackage["signature"]?>',
  jsApiList:['onMenuShareTimeline','onMenuShareAppMessage']
});
var dataForWeixin = {
  title:"2018上海厨卫展",
  desc:"欢迎莅临2018上海厨卫展金牌厨柜展位N1B01",
  imgUrl:"",
  link:"http://www.g1999.com/h5/2018/shz"
};
wx.ready(function(){
  wx.onMenuShareTimeline({
    title:dataForWeixin.title,
    link:dataForWeixin.link,
    imgUrl:dataForWeixin.imgUrl
  });
  wx.onMenuShareAppMessage({
    title:dataForWeixin.title,
    desc:dataForWeixin.desc,
    link:dataForWeixin.link,
    imgUrl:dataForWeixin.imgUrl
  })
});
</script>

</body>
</html>