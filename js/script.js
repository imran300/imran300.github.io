/*global $, console, google, WOW*/

$(function () {
    
    "use strict";
    
    var menuShow = $(".mobile-menu .fa-bars"),
        menuHide = $(".mobile-menu .fa-times"),
        menuBody = $(".navigation-bar"),
        menuBodyWidth = menuBody.outerWidth(),
        skills = $("#skills"),
        portfolio = $("#portfolio"),
        workMix = $(".work-filtering .mix"),
        galleryImg = $(".portfolio-lightbox .gallery-image img"),
        galleryH4 = $(".portfolio-lightbox .gallery-image h4"),
        galleryP = $(".portfolio-lightbox .gallery-image p"),
        galleryLink = $(".portfolio-lightbox .gallery-image a"),
        lightbox = $(".portfolio-lightbox"),
        $window = $(window),
        Body = $("body"),
        htmlBody = $("html, body"),
    //  ======================================================
    
    //  Personal Skills Percentage
        personalSkill1 = 70,   // ========>  (Communication)
        personalSkill2 = 80,   // ========>  (Team Work)
        personalSkill3 = 75,   // ========>  (Creativity)
        personalSkill4 = 90,   // ========>  (Dedication)
        
    //  Professional Skills Percentage
        professionalSkill1 = 90,   // ====>  (Photoshop)
        professionalSkill2 = 55,   // ====>  (HTML5 & CSS3)
        professionalSkill3 = 75,   // ====>  (JavaScript)
        professionalSkill4 = 60;   // ====>  (PHP)
    //  ======================================================
    
    // Mobile Menu
    menuShow.on("click", function () {
        $(this).hide(0);
        menuHide.show(0).css("display", "flex");
        menuBody.animate({
            right: 0
        });
        Body.animate({
            marginRight: menuBodyWidth,
            marginLeft: "-" + menuBodyWidth
        });
    });
    
    menuHide.on("click", function () {
        $(this).hide(0);
        menuShow.show(0);
        menuBody.animate({
            right: "-60px"
        });
        Body.animate({
            marginRight: "",
            marginLeft: ""
        });
    });
    
    if ($window.width() < 882) {
        $(".navigation-bar li i").on("click", function () {
            menuHide.hide(0);
            menuShow.show(0);
            menuBody.animate({
                right: "-60px"
            });
            Body.animate({
                marginRight: "",
                marginLeft: ""
            });
        });
    }
    
    $window.on("resize", function () {
        if ($window.width() >= 882) {
            
            menuShow.css("display", "");
            menuHide.css("display", "");
            menuBody.css("right", "");
            Body.css({
                marginRight: "",
                marginLeft: ""
            });
            
        } else {
            menuShow.css("display", "");
            menuHide.css("display", "");
            menuBody.css("right", "");
            Body.css({
                marginRight: "",
                marginLeft: ""
            });
        }
    });
    
    // Smooth Scroll
    $(".navigation-bar li i").on("click", function () {
        htmlBody.animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1500);
    });
    
    // Add Class Active to Menu Links on Scrolling
    $window.on('scroll', function () {
        
        var cur_pos = $(this).scrollTop();
        
        $("body > section").each(function () {
            
            var top     = $(this).offset().top - 20,
                bottom  = top + $(this).outerHeight();
            
            if (cur_pos >= top && cur_pos <= bottom) {
                
                $('.navigation-bar li .fa[data-value="' + $(this).attr('id') + '"]')
                    .addClass("active").parent("li").siblings("li").children(".fa").removeClass("active");
            }
        });
    });
    
    // Fire Count To Plugin in Skills
    if (skills.length) {
        $window.on("scroll.Skills1", function () {
            if ($(this).scrollTop() >= $(".progress-content .personal-skills").offset().top - $window.height() + 220) {
                
                // Personal Skills
                $(".personal-skills .progress-bar:first-of-type .bar-data .bar-value strong").countTo({
                    from: 0,
                    to: personalSkill1,
                    speed: 1800
                });
                
                $(".personal-skills .progress-bar:first-of-type .bar-line .bar-fill").animate({
                    width: personalSkill1 + "%"
                }, 1800);
                
                $(".personal-skills .progress-bar:nth-of-type(2) .bar-data .bar-value strong").countTo({
                    from: 0,
                    to: personalSkill2,
                    speed: 1800
                });
                
                $(".personal-skills .progress-bar:nth-of-type(2) .bar-line .bar-fill").animate({
                    width: personalSkill2 + "%"
                }, 1800);
                
                $(".personal-skills .progress-bar:nth-of-type(3) .bar-data .bar-value strong").countTo({
                    from: 0,
                    to: personalSkill3,
                    speed: 1800
                });
                
                $(".personal-skills .progress-bar:nth-of-type(3) .bar-line .bar-fill").animate({
                    width: personalSkill3 + "%"
                }, 1800);
                
                $(".personal-skills .progress-bar:last-of-type .bar-data .bar-value strong").countTo({
                    from: 0,
                    to: personalSkill4,
                    speed: 1800
                });
                
                $(".personal-skills .progress-bar:last-of-type .bar-line .bar-fill").animate({
                    width: personalSkill4 + "%"
                }, 1800);
                
                $window.off("scroll.Skills1");
            }
        });
        
        $window.on("scroll.Skills2", function () {
            if ($(this).scrollTop() >= $(".progress-content .professional-skills").offset().top - $window.height() + 220) {
                
                // Professional Skills
                $(".professional-skills .progress-bar:first-of-type .bar-data .bar-value strong").countTo({
                    from: 0,
                    to: professionalSkill1,
                    speed: 1800
                });
                
                $(".professional-skills .progress-bar:first-of-type .bar-line .bar-fill").animate({
                    width: professionalSkill1 + "%"
                }, 1800);
                
                $(".professional-skills .progress-bar:nth-of-type(2) .bar-data .bar-value strong").countTo({
                    from: 0,
                    to: professionalSkill2,
                    speed: 1800
                });
                
                $(".professional-skills .progress-bar:nth-of-type(2) .bar-line .bar-fill").animate({
                    width: professionalSkill2 + "%"
                }, 1800);
                
                $(".professional-skills .progress-bar:nth-of-type(3) .bar-data .bar-value strong").countTo({
                    from: 0,
                    to: professionalSkill3,
                    speed: 1800
                });
                
                $(".professional-skills .progress-bar:nth-of-type(3) .bar-line .bar-fill").animate({
                    width: professionalSkill3 + "%"
                }, 1800);
                
                $(".professional-skills .progress-bar:last-of-type .bar-data .bar-value strong").countTo({
                    from: 0,
                    to: professionalSkill4,
                    speed: 1800
                });
                
                $(".professional-skills .progress-bar:last-of-type .bar-line .bar-fill").animate({
                    width: professionalSkill4 + "%"
                }, 1800);
                
                $window.off("scroll.Skills2");
            }
        });
    }
    
    // ToggleClass Animation in TimeLine
    if ($window.width() < 768) {
        $(".education-content li:nth-of-type(odd) div, .experience-content li:nth-of-type(odd) div").removeClass("fadeInLeft").addClass("fadeInUp");
        $(".education-content li:nth-of-type(even) div, .experience-content li:nth-of-type(even) div").removeClass("fadeInRight").addClass("fadeInUp");
    } else {
        $(".education-content li:nth-of-type(odd) div, .experience-content li:nth-of-type(odd) div").removeClass("fadeInUp").addClass("fadeInLeft");
        $(".education-content li:nth-of-type(even) div, .experience-content li:nth-of-type(even) div").removeClass("fadeInUp").addClass("fadeInRight");
    }
    
    // Portfolio Overlay
    if (portfolio.length) {
        workMix.on("mouseover", function () {
            $(this).children(".overlay").fadeIn();
        });
        
        workMix.on("mouseleave", function () {
            $(this).children(".overlay").fadeOut();
        });
        
        // Filtering Portfolio
        
        $(".portfolio .portfolio-content ul li").on("click", function () {
            $(this).addClass("active").siblings().removeClass("active");
        });
        
        $(".portfolio .portfolio-content ul li:first-of-type").on("click", function () {
            workMix.fadeOut(0).fadeIn(600);
        });
        
        $(".portfolio .portfolio-content ul li:not(:first-of-type)").on("click", function () {
            workMix.fadeOut(0);
            $('.' + $(this).data('value')).fadeIn(600);
        });
        
        // Light Box Gallery in Portfolio
        
        $(".work-filtering .mix .overlay .fa-search-plus").on("click", function () {
            
            var mixIndex = $(this).parents(".mix").index();
            
            galleryImg.attr('src', $(this).parents(".overlay").siblings('img').attr('src'));
            galleryImg.attr('alt', $(this).parents(".overlay").siblings('img').attr('alt'));
            galleryH4.text($(this).parents(".overlay").siblings('.lightbox-heading').text());
            galleryP.text($(this).parents(".overlay").siblings('.lightbox-paragraph').text());
            galleryLink.attr('href', $(this).parents(".overlay").siblings('.lightbox-preview').attr('href'));
            
            lightbox.fadeIn().css("display", "flex");
            
            $(".portfolio-lightbox .gallery-navigate .next").on("click", function () {
                if (mixIndex < $(".work-filtering .mix").length - 1) {
                    mixIndex += 1;
                } else {
                    mixIndex = 0;
                }
                
                galleryImg.attr('src', $(".work-filtering .mix").eq(mixIndex).children('img').attr('src'));
                galleryImg.attr('alt', $(".work-filtering .mix").eq(mixIndex).children('img').attr('alt'));
                galleryH4.text($(".work-filtering .mix").eq(mixIndex).children('.lightbox-heading').text());
                galleryP.text($(".work-filtering .mix").eq(mixIndex).children('.lightbox-paragraph').text());
                galleryLink.attr('href', $(".work-filtering .mix").eq(mixIndex).children('.lightbox-preview').attr('href'));
            });
            
            $(".portfolio-lightbox .gallery-navigate .prev").on("click", function () {
                if (mixIndex > 0) {
                    mixIndex -= 1;
                } else if (mixIndex === 0) {
                    mixIndex = $(".work-filtering .mix").length - 1;
                }
                
                galleryImg.attr('src', $(".work-filtering .mix").eq(mixIndex).children('img').attr('src'));
                galleryImg.attr('alt', $(".work-filtering .mix").eq(mixIndex).children('img').attr('alt'));
                galleryH4.text($(".work-filtering .mix").eq(mixIndex).children('.lightbox-heading').text());
                galleryP.text($(".work-filtering .mix").eq(mixIndex).children('.lightbox-paragraph').text());
                galleryLink.attr('href', $(".work-filtering .mix").eq(mixIndex).children('.lightbox-preview').attr('href'));
            });
            
        });
        
        $(document).on('click', function (e) {
            if ($(e.target).closest('.work-filtering .mix .overlay .fa-search-plus').length) {
                console.log("by Webrouk");
            } else if (!$(e.target).closest('.portfolio-lightbox .gallery-image').length) {
                lightbox.fadeOut();
            } else if ($(e.target).closest('.portfolio-lightbox .gallery-image i').length) {
                lightbox.fadeOut();
            }
        });
        
        if ($window.height() < 500) {
            galleryImg.css({
                maxHeight: "200px"
            });
            
            galleryH4.css({
                textAlign: "center"
            });
            
            galleryP.css({
                display: "none"
            });
            
        } else {
            galleryImg.css({
                maxHeight: ""
            });
            
            galleryH4.css({
                textAlign: ""
            });
            
            galleryP.css({
                display: ""
            });
        }
        
        $window.on("resize", function () {
            if ($window.height() < 500) {
                galleryImg.css({
                    maxHeight: "200px"
                });
                
                galleryH4.css({
                    textAlign: "center"
                });
                
                galleryP.css({
                    display: "none"
                });
                
            } else {
                galleryImg.css({
                    maxHeight: ""
                });
                
                galleryH4.css({
                    textAlign: ""
                });
                
                galleryP.css({
                    display: ""
                });
            }
        });
    }
    
    // Google Maps
    function myMap() {
        var myCenter = new google.maps.LatLng(30.0444196, 31.23571160000006),
            mapOptions = {
                center: myCenter,
                mapTypeControl: false,
                streetViewControl: false,
                scrollwheel: false,
                zoom: 10,
                styles: [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#424b5b"
                    }, {
                        "weight": 2
                    }, {
                        "gamma": "1"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [{
                        "weight": 0.6
                    }, {
                        "color": "#545b6b"
                    }, {
                        "gamma": "0"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#545b6b"
                    }, {
                        "gamma": "1"
                    }, {
                        "weight": "10"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#666c7b"
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#545b6b"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#424a5b"
                    }, {
                        "lightness": "0"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#666c7b"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#2e3546"
                    }]
                }]
                
            },
            mapCanvas = document.getElementById("map"),
            map = new google.maps.Map(mapCanvas, mapOptions),
            marker = new google.maps.Marker({
                position: myCenter,
                icon: '../images/maps-marker.png'
            });
        marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', myMap);
    
    // Fire wow js Plugin
    new WOW().init();
    
    // Fire Nice Scroll Plugin
    $("html").niceScroll({
        cursorcolor: "#2896ca",
        cursorborder: "none",
        cursorwidth: "6px",
        horizrailenabled: false,
        zindex: "10000"
    });
});