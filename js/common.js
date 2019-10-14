/**
 * Created by Yimiky on 2019/10/11.
 */


$(document).ready(function(){
  //检测屏幕高度
  winW = document.documentElement.clientWidth || document.body.clientWidth;
  winH = document.documentElement.clientHeight || document.body.clientHeight;


  $(".page").css({
    // minHeight:(winW*1334/750) + "px"
    minHeight:winH + "px" ,//
	left:"-"+(1920-winW)/2+"px",
  });
  
  

});