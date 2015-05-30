function smoothScroll() {
    var e = $(window);
    e.on("mousewheel DOMMouseScroll", function(t) {
        t.preventDefault(), t = t.originalEvent.wheelDelta / 120 || -t.originalEvent.detail / 3, 
        t = e.scrollTop() - parseInt(280 * t), TweenMax.to(e, 1.1, {
            scrollTo:{
                y:t,
                autoKill:!0
            },
            ease:Power1.easeOut,
            overwrite:5
        });
    });
}

function setScrollIcon() {
    setTimeout(function() {
        $(".scrollDown").hasClass("on") ? $(".scrollDown").removeClass("on") :$(".scrollDown").addClass("on"), 
        setScrollIcon();
    }, 4e3);
}

/*function setAnimLogo() {
    setTimeout(function() {
        $logo = $(".logo a img"), $date = new Date(), setTimeout(function() {
            $logo.attr("src", "./WD_IMAGES/GLOBAL/animation-logo-lempens-design.gif?" + $date.getTime());
        }, 1e3), setAnimLogo();
    }, 3e4);
}*/

function detectDevicesandScreens() {
    $ifLargeScreen = function() {
        return 1600 < $(window).width() ? !0 :!1;
    };
}

function adapt_mainPic_height() {
    var e = $(window).height();
    $(".mainPicture").height(e);
}

function rotateH1() {
    $(".rotateH1").each(function() {
        $(this).prepend('<h1 class="rotateXh1"><span>' + $(this).text() + "</span></h1>");
    }), new ScrollScene({
        triggerElement:".rotateH1FR",
        triggerHook:.85,
        duration:600
    }).addTo($controller).setTween([ TweenMax.fromTo($(".rotateH1FR"), 1, {
        rotationX:-110
    }, {
        rotationX:0,
        ease:Linear.easeNone
    }), TweenMax.fromTo($(".rotateH1FR").children(".rotateXh1"), 1, {
        backgroundColor:"#dcdbdc"
    }, {
        backgroundColor:"#868586",
        ease:Linear.easeNone
    }) ]), new ScrollScene({
        triggerElement:".rotateH1LU",
        triggerHook:.85,
        duration:500
    }).addTo($controller).setTween([ TweenMax.fromTo(".rotateH1LU", 1, {
        rotationX:-110
    }, {
        rotationX:0,
        ease:Linear.easeNone
    }), TweenMax.fromTo($(".rotateH1LU").children(".rotateXh1"), 1, {
        backgroundColor:"#E1DFDE"
    }, {
        backgroundColor:"#868586",
        ease:Linear.easeNone
    }) ]), new ScrollScene({
        triggerElement:".rotateH1BE",
        triggerHook:1,
        duration:500
    }).addTo($controller).setTween([ TweenMax.fromTo(".rotateH1BE", 1, {
        rotationX:-110
    }, {
        rotationX:0,
        ease:Linear.easeNone
    }), TweenMax.fromTo($(".rotateH1BE").children(".rotateXh1"), 1, {
        backgroundColor:"#DCDBDC"
    }, {
        backgroundColor:"#868586",
        ease:Linear.easeNone
    }) ]), new ScrollScene({
        triggerElement:".rotateH1AR",
        triggerHook:0.85,
        duration:500
    }).addTo($controller).setTween([ TweenMax.fromTo(".rotateH1AR", 1, {
        rotationX:-100
    }, {
        rotationX:0,
        ease:Linear.easeNone
    }), TweenMax.fromTo($(".rotateH1AR").children(".rotateXh1"), 1, {
        backgroundColor:"#DE792F",
		color:"#FFF"
    }, {
        backgroundColor:"#F2EDE9",
		color:"DE792F",
        ease:Linear.easeNone
    }) ]);
}
// sub nav hover function
function subnav(e, t, o) {
    var n = e.find("li").length;
	var navWidth=177;
	if (o<=150){
		navWidth=177;
		}
		else{
			navWidth=120;
			}
    switch ($(".subnav"), t) {
      case "hover":
        for (e.find(".subnav").width(navWidth).css({
            overflow:"visible"
        }),  
		 TweenMax.to(e, .35, {
            backgroundColor:"#fff",
            ease:"Expo.easeOut"
        }), TweenMax.to(e.children("a"), .35, {
            backgroundPosition:"center 0px",
            ease:"Expo.easeOut"
        }), $i = 0; n >= $i; $i++) TweenMax.fromTo(e.find("li").eq($i), .45, {
            rotationX:180,
            height:0
        }, {
            delay:.25 * $i,
            rotationX:0,
            height:o,
            ease:"Expo.easeOut"
        }), TweenMax.to(e.find("li").eq($i).children(".after"), .55, {
            delay:.15 * $i,
            opacity:0
        });
       /* categorizr.isDesktop &&*/ (e.find("li").on($mouseEventHover, function() {
            subnavLi($(this), "hover");
        }), e.find("li").on($mouseEventOut, function() {
            subnavLi($(this), "out");
        }), e.find("li").on($mouseEventClick, function() {
            var e = $(this).attr("class"), t = 300;
            "france" == e && (t = 500), TweenMax.to($(window), 1.3, {
                scrollTo:{
                    //y:$("#" + e).position().top + t
					 y:$("[name=" + e+"]").position().top +t/2
                },
                ease:Expo.easeInOut
            });
        }));
        break;
		
		 case "home":
        for (e.find(".subnav").width(177).css({
            overflow:"visible"
        }), TweenMax.to(e, .35, {
            backgroundColor:"#fff",
            ease:"Expo.easeOut"
        }), TweenMax.to(e.children("a"), .35, {
            backgroundPosition:"center 0px",
            ease:"Expo.easeOut"
        }), $i = 0; n >= $i; $i++) TweenMax.fromTo(e.find("li").eq($i), .45, {
            rotationX:180,
            height:0
        }, {
            delay:.25 * $i,
            rotationX:0,
            height:o,
            ease:"Expo.easeOut"
        }), TweenMax.to(e.find("li").eq($i).children(".after"), .55, {
            delay:.15 * $i,
            opacity:0
        });
        categorizr.isDesktop && (e.find("li").on($mouseEventHover, function() {
            subnavLi($(this), "hover");
        }), e.find("li").on($mouseEventOut, function() {
            subnavLi($(this), "out");
        }), e.find("li").on($mouseEventClick, function() {
            var e = $(this).attr("class"), t = 300;
            "france" == e && (t = 500), TweenMax.to($(window), 1.3, {
                scrollTo:{
                    //y:$("#" + e).position().top + t
					 y:$("[name=" + e+"]").position().top +t/2
                },
                ease:Expo.easeInOut
            });
        }));
        break;
		

      case "out":
	  
	   
	  
        TweenMax.to(e, .85, {
            backgroundColor:"#851B58",
            ease:"Back.easeOut"
        }), TweenMax.to(e.children("a"), .85, {
            backgroundPosition:"center -22px",
            ease:"Back.easeOut"
        }), e.find(".subnav").width(0).css({
            overflow:"hidden"
        }), TweenMax.to(e.find("li"), 0, {
            height:0,
            rotationX:90
        }), TweenMax.to(e.find("li").children(".after"), 0, {
            opacity:1
        });
    }
}
/*
//sub nav modification
function subnav(e, t, o) {
    var n = e.find("li").length;
    switch ($(".subnav"), t) {
      case "hover":
        for (e.find(".subnav").width(177).css({
            overflow:"visible"
        }), TweenMax.to(e, .35, {
            backgroundColor:"#fff",
            ease:"Expo.easeOut"
        }), TweenMax.to(e.children("a"), .35, {
            backgroundPosition:"center 0px",
            ease:"Expo.easeOut"
        }), $i = 0; n >= $i; $i++) TweenMax.fromTo(e.find("li").eq($i), .45, {
            rotationX:180,
            height:0
        }, {
            delay:.25 * $i,
            rotationX:0,
            height:o,
            ease:"Expo.easeOut"
        }), TweenMax.to(e.find("li").eq($i).children(".after"), .55, {
            delay:.15 * $i,
            opacity:0
        });
        categorizr.isDesktop && (e.find("li").on($mouseEventHover, function() {
            subnavLi($(this), "hover");
        }), e.find("li").on($mouseEventOut, function() {
            subnavLi($(this), "out");
        }), e.find("li").on($mouseEventClick, function() {
            var e = $(this).attr("class"), t = 300;
            "france" == e && (t = 500), TweenMax.to($(window), 1.3, {
                scrollTo:{
                    //y:$("#" + e).position().top + t
					 y:$("[name=" + e+"]").position().top +t/2
                },
                ease:Expo.easeInOut
            });
        }));
        break;

      case "out":
	  
	   
	  
        TweenMax.to(e, .35, {
            backgroundColor:"#851B58",
            ease:"Back.easeOut"
        }), TweenMax.to(e.children("a"), .35, {
            backgroundPosition:"center -22px",
            ease:"Back.easeOut"
        }), e.find(".subnav").width(0).css({
            overflow:"hidden"
        }), TweenMax.to(e.find("li"), 0, {
            height:0,
            rotationX:90
        }), TweenMax.to(e.find("li").children(".after"), 0, {
            opacity:1
        });
    }
}

///end sub nav 2 func
*/
function subnavLi(e, t) {
    switch (t) {
      case "hover":
        TweenMax.to(e, .3, {
            borderWidth:4,
            x:30,
            rotationY:3,
			rotationZ:1,
			
            ease:"Back.easeInOut"
        }), TweenMax.fromTo(e.find(".logorub"), .7, {
            rotationY:0
        }, {
            rotationY:360,
            ease:Back.easeOut
        });
        break;

      case "out":
        TweenMax.to(e, .3, {
            borderWidth:0,
            x:0,
            rotationY:0,
			rotationZ:0,
            ease:"Back.easeInOut"
        });
    }
}

function animate_illustration(e, t) {
    switch ($("#" + e).find("div"), TweenMax.killTweensOf($("#" + e)), t) {
      case "start":
        setTimeout(function() {
            $("#" + e).find('div:not(".cloud,.country_name")').each(function(e) {
                TweenMax.to($(this), .5, {
                    delay:.15 * e,
                    rotationX:0,
                    opacity:1,
                    ease:"Back.easeOut",
                    startAt:{
                        visibility:"visible"
                    }
                });
            });
        }, 100), setTimeout(function() {
            $("#" + e).find("div.cloud").each(function(e) {
                TweenMax.fromTo($(this), .5, {
                    scale:3,
                    opacity:0,
                    rotationX:0,
                    visibility:"visible"
                }, {
                    delay:.15 * e,
                    scale:1,
                    opacity:1,
                    ease:"Back.easeOut"
                });
            });
        }, 400), setTimeout(function() {
            TweenMax.to($("#" + e).find("div.country_name"), .5, {
                opacity:1,
                left:$("#" + e).find("div.country_name").data("posx") + "%",
                ease:"Back.easeOut"
            });
        }, 1e3);
        break;

      case "end":
        setTimeout(function() {
            $("#" + e).find('div:not(".cloud,.country_name")').each(function(e) {
                TweenMax.fromTo($(this), .5, {
                    rotationX:0,
                    startAt:{
                        visibility:"visible"
                    }
                }, {
                    delay:.15 * e,
                    rotationX:-89,
                    ease:"Back.easeIn",
                    opacity:0,
                    onCompleteParams:[ $(this) ],
                    onComplete:function(e) {
                        e.css({
                            visibility:"hidden",
                            opacity:1
                        });
                    }
                });
            });
        }, 400), $("#" + e).find("div.cloud").each(function(e) {
            TweenMax.fromTo($(this), .5, {
                scale:1,
                opacity:1,
                startAt:{
                    visibility:"visible"
                }
            }, {
                delay:.15 * e,
                scale:0,
                ease:"Back.easeIn",
                opacity:0,
                onCompleteParams:[ $(this) ],
                onComplete:function() {
                    $(this).css({
                        visibility:"hidden",
                        opacity:1,
                        scale:3
                    });
                }
            });
        }), setTimeout(function() {
            $("#" + e).find("div.country_name").each(function(e) {
                TweenMax.to($(this), .5, {
                    delay:.15 * e,
                    opacity:0,
                    left:"20%",
                    ease:"Back.easeOut"
                });
            });
        }, 1e3);
    }
}

function init_slides() {
    TweenMax.killTweensOf($(".skills_circles"), $(".skills_softwares")), $(".svgCircle").removeClass("animate"), 
    $(".activeThumb").css("opacity", 0), $(".skills_circles").find("h1").css("opacity", 0), 
    $(".skills_softwares").children(".row").css({
        top:0,
        opacity:0
    }), $(".skills_softwares").find(".col").children("div").css({
        height:0
    }), $(".skills_softwares").find(".col").children("h1").css({
        marginBottom:-10,
        opacity:0
    }), $(".skills_softwares").next("p").css({
        opacity:0
    });
}

function anim_slide_skills_circles() {
    $(".svgCircle").each(function(e) {
        $(this).delay(580 * e).fadeIn(0, function() {
            $(this).addClass("animate");
        });
    }), $(".activeThumb").each(function(e) {
        $(this).delay(580 * e).fadeIn(0, function() {
            TweenMax.fromTo($(this), .3, {
                scale:.2,
                opacity:0,
                y:-90
            }, {
                opacity:1,
                scale:1,
                y:0,
                ease:Back.easeOut
            });
        });
    }), $(".skills_circles").find("h1").each(function(e) {
        $(this).delay(680 * e).fadeIn(0, function() {
            TweenMax.fromTo($(this), .3, {
                opacity:0,
                y:-35
            }, {
                opacity:1,
                y:0,
                ease:Back.easeOut
            });
        });
    });
}

function anim_slide_skills_softwares() {
    1 < $(".skills_softwares").length && $(".skills_softwares").eq(0).remove(), $(".skills_softwares").children(".row").each(function(e) {
        $(this).delay(150 * e).fadeIn(0, function() {
            TweenMax.to($(this), .3, {
                top:45 * e,
                opacity:1,
                ease:Back.easeOut
            });
        });
    }), setTimeout(function() {
        $(".skills_softwares").find(".col").children("div").each(function(e) {
            $(this).delay(150 * e).fadeIn(0, function() {
                TweenMax.to($(this), .3, {
                    height:parseInt(1.8 * $(this).data("skills")),
                    ease:Back.easeOut
                });
            });
        });
    }, 750), setTimeout(function() {
        TweenMax.to($(".skills_softwares").next("p"), 1.5, {
            opacity:1,
            ease:Back.easeOut
        });
    }, 1500), setTimeout(function() {
        $(".skills_softwares").find(".col").children("h1").each(function(e) {
            $(this).delay(150 * e).fadeIn(0, function() {
                TweenMax.to($(this), .3, {
                    marginBottom:20,
                    opacity:1,
                    ease:Back.easeOut
                });
            });
        });
    }, 750);
}





$increment = 0;