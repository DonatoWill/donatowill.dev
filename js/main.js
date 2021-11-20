/*
* Template Name: BreezyCV - Resume / CV / vCard / Portfolio Template
* Author: LMPixels
* Author URL: http://themeforest.net/user/lmpixels
* Version: 1.5.0
*/

(function ($) {
    "use strict";
    // Portfolio subpage filters
    function portfolio_init() {
        var portfolio_grid = $('.portfolio-grid'),
            portfolio_filter = $('.portfolio-filters');

        if (portfolio_grid) {

            portfolio_grid.shuffle({
                speed: 450,
                itemSelector: 'figure'
            });

            portfolio_filter.on("click", ".filter", function (e) {
                portfolio_grid.shuffle('update');
                e.preventDefault();
                $('.portfolio-filters .filter').parent().removeClass('active');
                $(this).parent().addClass('active');
                portfolio_grid.shuffle('shuffle', $(this).attr('data-group'));
            });

        }
    }


    // Hide Mobile menu
    function mobileMenuHide() {
        var windowWidth = $(window).width(),
            siteHeader = $('#site_header');

        if (windowWidth < 1025) {
            siteHeader.addClass('mobile-menu-hide');
            $('.menu-toggle').removeClass('open');
            setTimeout(function () {
                siteHeader.addClass('animate');
            }, 500);
        } else {
            siteHeader.removeClass('animate');
        }
    }
    // /Hide Mobile menu

    // Custom scroll
    function customScroll() {
        var windowWidth = $(window).width();
        if (windowWidth > 1024) {
            $('.animated-section, .single-page-content').each(function () {
                $(this).perfectScrollbar();
            });
        } else {

            $('.animated-section, .single-page-content').each(function () {
                $(this).perfectScrollbar();
            });
        }
    }
    // /Custom scroll


    //On Window load & Resize
    $(window)
        .on('load', function () { //Load
            // Animation on Page Loading
            $(".preloader").fadeOut(800, "linear");

            // initializing page transition.
            var ptPage = $('.animated-sections');
            if (ptPage[0]) {
                PageTransitions.init({
                    menu: 'ul.main-menu',
                });
            }
        })
        .on('resize', function () { //Resize
            mobileMenuHide();
            $('.animated-section').each(function () {
                //$(this).perfectScrollbar('update');

            });
            customScroll();
        });



    // On Document Load
    $(document).ready(function () {

        $('.animated-section, .single-page-content').each(function () {
            $(this).on('ps-y-reach-end', function () {
                $(".lmpixels-arrow-right").click();
            });
            $(this).on('ps-y-reach-start', function () {
                $(".lmpixels-arrow-left").click();
            });
        });

        var movementStrength = 23;
        var height = movementStrength / $(document).height();
        var width = movementStrength / $(document).width();
        $("body").on('mousemove', function (e) {
            var pageX = e.pageX - ($(document).width() / 2),
                pageY = e.pageY - ($(document).height() / 2),
                newvalueX = width * pageX * -1,
                newvalueY = height * pageY * -1,
                elements = $('.lm-animated-bg');

            elements.addClass('transition');
            elements.css({
                "background-position": "calc( 50% + " + newvalueX + "px ) calc( 50% + " + newvalueY + "px )",
            });

            setTimeout(function () {
                elements.removeClass('transition');
            }, 300);
        })

        // Mobile menu
        $('.menu-toggle').on("click", function () {
            $('#site_header').addClass('animate');
            $('#site_header').toggleClass('mobile-menu-hide');
            $('.menu-toggle').toggleClass('open');
        });

        // Mobile menu hide on main menu item click
        $('.main-menu').on("click", "a", function (e) {
            mobileMenuHide();
        });

        // Sidebar toggle
        $('.sidebar-toggle').on("click", function () {
            $('#blog-sidebar').toggleClass('open');
        });

        // Initialize Portfolio grid
        var $portfolio_container = $(".portfolio-grid");
        $portfolio_container.imagesLoaded(function () {
            portfolio_init(this);
        });

        // Blog grid init
        var $container = $(".blog-masonry");
        $container.imagesLoaded(function () {
            $container.masonry();
        });

        customScroll();

        //Form Controls
        $('.form-control')
            .val('')
            .on("focusin", function () {
                $(this).parent('.form-group').addClass('form-group-focus');
            })
            .on("focusout", function () {
                if ($(this).val().length === 0) {
                    $(this).parent('.form-group').removeClass('form-group-focus');
                }
            });

        // Lightbox init
        $('body').magnificPopup({
            delegate: 'a.lightbox',
            type: 'image',
            removalDelay: 300,

            mainClass: 'mfp-fade',
            image: {
                titleSrc: 'title',
                gallery: {
                    enabled: true
                },
            },

            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '<div class="mfp-title mfp-bottom-iframe-title"></div>' +
                    '</div>',

                patterns: {
                    youtube: {
                        index: 'youtube.com/', 
                        id: null, 
                        src: '%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                },

                srcAction: 'iframe_src', 

                callbacks: {
                markupParse: function (template, values, item) {
                    values.title = item.el.attr('title');
                }
            }
            },
        });

    });

})(jQuery);
