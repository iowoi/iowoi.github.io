function changeLocation(a){$(".cities li").removeClass("current"),$(".cities li:nth-child("+a+")").addClass("current")}var slider1,slider2;$(document).ready(function(){var a=0;slider1=$("#slider1").bxSlider({auto:!1,speed:800,pause:1e4,controls:!1,responsive:!0,nextText:" ",prevText:" ",touchEnabled:!1,oneToOneTouch:!1}),slider2=$("#slider2").bxSlider({auto:!0,speed:800,pause:1e4,controls:!1,responsive:!0,nextText:" ",prevText:" ",onSlideAfter:function(a,b,c){changeLocation(c+1)},onSlideNext:function(a,b,c){slider1.goToSlide(c)},onSlidePrev:function(a,b,c){slider1.goToSlide(c)}}),$("#goLeft").click(function(a){a.preventDefault(),slider2.goToPrevSlide()}),$("#goRight").click(function(a){a.preventDefault(),slider2.goToNextSlide()}),$(".cities li").each(function(){$(this).attr("rel",a),a+=1,$(this).find("a").click(function(a){a.preventDefault();var b=parseInt($(this).parent().attr("rel"));slider1.goToSlide(b),slider2.goToSlide(b),changeLocation(b+1)})}),$(window).resize(function(){console.log($(window).width()),$(window).width()<640?$(".sliderAbout .nav").css("left",($(window).width()-230)/2):$(".sliderAbout .nav").attr("style","")})});
/*! kvb 最后修改于： 2018-01-22 */