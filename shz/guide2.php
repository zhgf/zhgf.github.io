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
	<img src="images/guide_02_01.jpg">
	<img src="images/guide_02_03.jpg">
	<img src="images/guide_02_04.jpg">
	<img src="images/guide_02_05.jpg">
	<img src="images/guide_02_06.jpg">
	<img src="images/guide_02_07.jpg">
	<img src="images/guide_02_08.jpg">
	<img src="images/guide_02_09.jpg">
	<img src="images/guide_02_10.jpg">
	<img src="images/guide_02_11.jpg">

	<div class="foot-fix">
		<div class="guide-foot flexbox">
			<a class="flexchild" href="guide1.php"></a>
			<a class="flexchild" href="guide2.php"></a>
			<a class="flexchild" href="guide3.php"></a>
			<a class="flexchild" href="http://www.g1999.com/zs/index.php?g=&m=m&a=index"></a>
		</div>
	</div>
	
</div>

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