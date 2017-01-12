(function ($) {
 "use strict";



    var tpj=jQuery;                 
    var mainSlider;
    tpj(document).ready(function() {
        if(tpj("#adam_main_slider").revolution == undefined){
            revslider_showDoubleJqueryError("#adam_main_slider");
        }else{
            mainSlider = tpj("#adam_main_slider").show().revolution({
                sliderType:"hero",
                jsFileLocation:"revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                },
                responsiveLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[560,400,300],
                lazyType:"full",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,3,4,5,6,7,12,16,10,50],
                },
                shadow:0,
                spinner:"spinner2",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    disableFocusListener:false,
                }
            });
        }
    }); /*ready*/


    var tpj=jQuery;                 
    var mainSlider;
    tpj(document).ready(function() {
        if(tpj("#adam_home_4_slider").revolution == undefined){
            revslider_showDoubleJqueryError("#adam_home_4_slider");
        }else{
            mainSlider = tpj("#adam_home_4_slider").show().revolution({
                sliderType:"standard",
                jsFileLocation:"revolution/js/",
                sliderLayout:"fullwidth",
                sliderLayout: "fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                },
                responsiveLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[500,400,300],
                lazyType:"full",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,3,4,5,6,7,12,16,10,50],
                },
                shadow:0,
                spinner:"spinner2",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    disableFocusListener:false,
                }
            });
        }
    }); /*ready*/


    var tpj=jQuery;             
    var revapi46;
    tpj(document).ready(function() {
        if(tpj("#adam_home_5_slider").revolution == undefined){
            revslider_showDoubleJqueryError("#adam_home_5_slider");
        }else{
            revapi46 = tpj("#adam_home_5_slider").show().revolution({
                sliderType:"standard",
                jsFileLocation:"revolution/js/",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    arrows: {
                        style:"uranus",
                        enable:true,
                        hide_onmobile:false,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:17,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:17,
                            v_offset:0
                        }
                    }
                },
                responsiveLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[868,768,960,720],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,3,4,5,6,7,12,16,10,50],
                    disable_onmobile:"on"
                },
                shadow:0,
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0px",
                disableProgressBar:"off",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
    }); /*ready*/


})(jQuery); 