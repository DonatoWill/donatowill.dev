var PageTransitions=function(a,e){"use strict";var t=a(".animated-sections"),o=!1,i=!0,n=!1,s=(a(window),{WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"}[Modernizr.prefixed("animation")]),c=Modernizr.cssanimations;function m(){"#home"==location.hash?(a(".side-info").addClass("display-none"),a(".content-area").addClass("max-width-100pct")):(a(".side-info").removeClass("display-none"),a(".content-area").removeClass("max-width-100pct"))}function d(e){if(!e)return!1;var t=a(e);t=t[0],(t=a(t))&&(a("ul.main-menu a").removeClass("active"),t.addClass("active"))}function r(){var e=a("#page-ajax-loaded");function t(){e.removeClass("animated-section-moveToRight closed"),e.show(),a("body").addClass("ajax-page-visible")}var o=a(".ajax-page-load").each(function(){if(o=a(this).attr("href"),location.hash==location.hash.split("/")[0]+"/"+o.substr(0,o.length-5)){var i=a(this).attr("href");return t(),e.load(i),!1}});a(document).on("click",".main-menu, #ajax-page-close-button",function(t){t.preventDefault(),a("#page-ajax-loaded").addClass("animated-section-moveToRight closed"),a("body").removeClass("ajax-page-visible"),setTimeout(function(){a("#page-ajax-loaded.closed").html(""),e.hide()},500),location.hash=location.hash.split("/")[0]}).on("click",".ajax-page-load",function(){var e=location.hash.split("/")[0]+"/"+a(this).attr("href").substr(0,a(this).attr("href").length-5);return location.hash=e,t(),!1})}function l(e,m){var d,r=a(window).width(),l=(a(window).scrollTop(),t),p=l.data("current"),f=(m=e.attr("href").split("#")[1],a("section[data-id="+p+"]").addClass("section-active"));if(!e.attr("data-animation")){var u=parseInt(Math.floor(67*Math.random())+1);e.data("animation",u)}var v,b,k,F=e.data("animation").toString();if(r<1024)k=a(window).scrollTop()+a(window).height()==a(document).height()?3:4;else if(-1!=F.indexOf("-")){var g=F.split("-");k=parseInt(g[Math.floor(Math.random()*g.length)])}else k=parseInt(F);if(k>67)return alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67"),!1;switch(k){case 1:v="animated-section-moveFromRight",b="animated-section-moveToLeft";break;case 2:v="animated-section-moveFromLeft",b="animated-section-moveToRight";break;case 3:v="animated-section-moveFromBottom",b="animated-section-moveToTop";break;case 4:v="animated-section-moveFromTop",b="animated-section-moveToBottom";break;case 5:v="animated-section-moveFromRight animated-section-ontop",b="animated-section-fade";break;case 6:v="animated-section-moveFromLeft animated-section-ontop",b="animated-section-fade";break;case 7:v="animated-section-moveFromBottom animated-section-ontop",b="animated-section-fade";break;case 8:v="animated-section-moveFromTop animated-section-ontop",b="animated-section-fade";break;case 9:v="animated-section-moveFromRightFade",b="animated-section-moveToLeftFade";break;case 10:v="animated-section-moveFromLeftFade",b="animated-section-moveToRightFade";break;case 11:v="animated-section-moveFromBottomFade",b="animated-section-moveToTopFade";break;case 12:v="animated-section-moveFromTopFade",b="animated-section-moveToBottomFade";break;case 13:v="animated-section-moveFromRight",b="animated-section-moveToLeftEasing animated-section-ontop";break;case 14:v="animated-section-moveFromLeft",b="animated-section-moveToRightEasing animated-section-ontop";break;case 15:v="animated-section-moveFromBottom",b="animated-section-moveToTopEasing animated-section-ontop";break;case 16:v="animated-section-moveFromTop",b="animated-section-moveToBottomEasing animated-section-ontop";break;case 17:v="animated-section-moveFromRight animated-section-ontop",b="animated-section-scaleDown";break;case 18:v="animated-section-moveFromLeft animated-section-ontop",b="animated-section-scaleDown";break;case 19:v="animated-section-moveFromBottom animated-section-ontop",b="animated-section-scaleDown";break;case 20:v="animated-section-moveFromTop animated-section-ontop",b="animated-section-scaleDown";break;case 21:v="animated-section-scaleUpDown animated-section-delay300",b="animated-section-scaleDown";break;case 22:v="animated-section-scaleUp animated-section-delay300",b="animated-section-scaleDownUp";break;case 23:v="animated-section-scaleUp",b="animated-section-moveToLeft animated-section-ontop";break;case 24:v="animated-section-scaleUp",b="animated-section-moveToRight animated-section-ontop";break;case 25:v="animated-section-scaleUp",b="animated-section-moveToTop animated-section-ontop";break;case 26:v="animated-section-scaleUp",b="animated-section-moveToBottom animated-section-ontop";break;case 27:v="animated-section-scaleUpCenter animated-section-delay400",b="animated-section-scaleDownCenter";break;case 28:v="animated-section-moveFromRight animated-section-delay200 animated-section-ontop",b="animated-section-rotateRightSideFirst";break;case 29:v="animated-section-moveFromLeft animated-section-delay200 animated-section-ontop",b="animated-section-rotateLeftSideFirst";break;case 30:v="animated-section-moveFromTop animated-section-delay200 animated-section-ontop",b="animated-section-rotateTopSideFirst";break;case 31:v="animated-section-moveFromBottom animated-section-delay200 animated-section-ontop",b="animated-section-rotateBottomSideFirst";break;case 32:v="animated-section-flipInLeft animated-section-delay500",b="animated-section-flipOutRight";break;case 33:v="animated-section-flipInRight animated-section-delay500",b="animated-section-flipOutLeft";break;case 34:v="animated-section-flipInBottom animated-section-delay500",b="animated-section-flipOutTop";break;case 35:v="animated-section-flipInTop animated-section-delay500",b="animated-section-flipOutBottom";break;case 36:v="animated-section-scaleUp",b="animated-section-rotateFall animated-section-ontop";break;case 37:v="animated-section-rotateInNewspaper animated-section-delay500",b="animated-section-rotateOutNewspaper";break;case 38:v="animated-section-moveFromRight",b="animated-section-rotatePushLeft";break;case 39:v="animated-section-moveFromLeft",b="animated-section-rotatePushRight";break;case 40:v="animated-section-moveFromBottom",b="animated-section-rotatePushTop";break;case 41:v="animated-section-moveFromTop",b="animated-section-rotatePushBottom";break;case 42:v="animated-section-rotatePullRight animated-section-delay180",b="animated-section-rotatePushLeft";break;case 43:v="animated-section-rotatePullLeft animated-section-delay180",b="animated-section-rotatePushRight";break;case 44:v="animated-section-rotatePullBottom animated-section-delay180",b="animated-section-rotatePushTop";break;case 45:v="animated-section-rotatePullTop animated-section-delay180",b="animated-section-rotatePushBottom";break;case 46:v="animated-section-moveFromRightFade",b="animated-section-rotateFoldLeft";break;case 47:v="animated-section-moveFromLeftFade",b="animated-section-rotateFoldRight";break;case 48:v="animated-section-moveFromBottomFade",b="animated-section-rotateFoldTop";break;case 49:v="animated-section-moveFromTopFade",b="animated-section-rotateFoldBottom";break;case 50:v="animated-section-rotateUnfoldLeft",b="animated-section-moveToRightFade";break;case 51:v="animated-section-rotateUnfoldRight",b="animated-section-moveToLeftFade";break;case 52:v="animated-section-rotateUnfoldTop",b="animated-section-moveToBottomFade";break;case 53:v="animated-section-rotateUnfoldBottom",b="animated-section-moveToTopFade";break;case 54:v="animated-section-rotateRoomLeftIn",b="animated-section-rotateRoomLeftOut animated-section-ontop";break;case 55:v="animated-section-rotateRoomRightIn",b="animated-section-rotateRoomRightOut animated-section-ontop";break;case 56:v="animated-section-rotateRoomTopIn",b="animated-section-rotateRoomTopOut animated-section-ontop";break;case 57:v="animated-section-rotateRoomBottomIn",b="animated-section-rotateRoomBottomOut animated-section-ontop";break;case 58:v="animated-section-rotateCubeLeftIn",b="animated-section-rotateCubeLeftOut animated-section-ontop";break;case 59:v="animated-section-rotateCubeRightIn",b="animated-section-rotateCubeRightOut animated-section-ontop";break;case 60:v="animated-section-rotateCubeTopIn",b="animated-section-rotateCubeTopOut animated-section-ontop";break;case 61:v="animated-section-rotateCubeBottomIn",b="animated-section-rotateCubeBottomOut animated-section-ontop";break;case 62:v="animated-section-rotateCarouselLeftIn",b="animated-section-rotateCarouselLeftOut animated-section-ontop";break;case 63:v="animated-section-rotateCarouselRightIn",b="animated-section-rotateCarouselRightOut animated-section-ontop";break;case 64:v="animated-section-rotateCarouselTopIn",b="animated-section-rotateCarouselTopOut animated-section-ontop";break;case 65:v="animated-section-rotateCarouselBottomIn",b="animated-section-rotateCarouselBottomOut animated-section-ontop";break;case 66:v="animated-section-rotateSidesIn animated-section-delay200",b="animated-section-rotateSidesOut";break;case 67:v="animated-section-rotateSlideIn",b="animated-section-rotateSlideOut"}d=p;var T=a('section[data-id="'+p+'"]');d!=(p=m)?(o=!0,l.data("current",p),(f=a("section[data-id="+p+"]").addClass("section-active")).scrollTop(0),T.addClass(b).on(s,function(){T.off(s),i=!0,n&&(h(l,f,T),i=!1)}),f.addClass(v).on(s,function(){f.off(s),n=!0,i&&(h(l,f,T),n=!1,o=!1)})):o=!1;c||h(T,f)}function h(a,e,t){!function(a,e){e.attr("class",e.data("originalClassList")),a.attr("class",a.data("originalClassList")+" section-active")}(e,t)}return{init:function(e){a(".animated-section").each(function(){var e=a(this);e.data("originalClassList",e.attr("class"))}),t.each(function(){""===location.hash&&a("section[data-id="+n+"]").addClass("section-active")}),a(".nav-anim").on("click",function(e){if(e.preventDefault(),o)return!1;var t=a(this);d(t),l(t),location.hash=a(this).attr("href")}),window.onhashchange=function(e){if(m(),location.hash){if(o)return!1;var t=a(i+' a[href*="'+location.hash.split("/")[0]+'"]');d(t),l(t),r()}};var i=e.menu,n=""===location.hash?location.hash=a("section.animated-section").first().attr("data-id"):location.hash;location.hash=n,m();var s=a(i+' a[href*="'+location.hash.split("/")[0]+'"]');d(s),l(s),a("body").append('<div id="page-ajax-loaded" class="page-ajax-loaded animated animated-section-moveFromLeft"></div>'),r(),a(".lmpixels-arrow-right").click(function(){var e=a(".main-menu a.active").parent("li");e.next("li").children("a").click(),e.is(":last-child")&&a(".main-menu li:first-child").children("a").click()}),a(".lmpixels-arrow-left").click(function(){var e=a(".main-menu a.active").parent("li");e.prev("li").children("a").click(),e.is(":first-child")&&a(".main-menu li:last-child").children("a").click()})}}}(jQuery);