function checkHeader(){$(window).scrollTop()>0?$("header").addClass("white"):$("header").removeClass("white")}$(document).ready(function(){$("nav>ul>li").has("ul").each(function(){$(this).children("a:first").click(function(){$(this).next().is(":visible")||($("nav>ul>li>ul").hide(),$("#lanMenu>ul").hide()),$(this).next().slideToggle(function(){$(this).is(":visible")?$(this).prev().children("i").removeClass("fa-angle-right").addClass("fa-angle-down"):$(this).prev().children("i").removeClass("fa-angle-down").addClass("fa-angle-right")})})}),$("a#mobileMenu").click(function(){$("nav>ul").slideToggle()}),$("#mobileMenuClose a").click(function(){$("nav>ul").hide()}),$("#lanMenu>a").click(function(){$("#lanMenu>ul").is(":visible")||$("nav>ul>li>ul").hide(),$("#lanMenu>ul").slideToggle()}),$("#mobileLanMenuClose").click(function(){$("#lanMenu>ul").hide()}),$(window).resize(function(){$("a#mobileMenu").is(":visible")?$("nav>ul").hide():$("nav>ul").show()}),checkHeader(),$(window).on("scroll",function(){checkHeader()}),$("#wechat").mouseover(function(){if($("#wechatimg").length<=0){var a=$('<div id="wechatimg"></div>');$("body").append(a)}$("#wechatimg").css("position","absolute").css("left",$("#wechat").offset().left-42).css("top",$("#wechat").offset().top-120),$("#wechatimg").show()}),$("#wechat").mouseout(function(){$("#wechatimg").hide()})});
/*! kvb 最后修改于： 2018-01-22 */