$(document).ready(function(){function a(){$("#mobileMenu").is(":visible")?($(".relationYear li").hide(),$(".relationYear li.current").show()):$(".relationYear li").show()}$(".relationYear li a").click(function(a){$("#mobileMenu").is(":visible")&&(a.preventDefault(),"Y"==$(".relationYear").attr("isshow")?($(".relationYear li").hide(),$(this).parent().addClass("current"),$(".relationYear li.current").show(),$(".relationYear").attr("isshow",""),document.location=$(this).attr("href")):($(".relationYear li").removeClass("current"),$(".relationYear li").show(),$(".relationYear").attr("isshow","Y")))}),$(window).resize(function(){a()})});
/*! kvb 最后修改于： 2018-01-22 */