"use strict";

jQuery(document).ready(function(){

    var pixies_js_bg_image = jQuery('.pixies_js_bg_image');
    if (jQuery(pixies_js_bg_image).length > 0) {
        jQuery(pixies_js_bg_image).each(function () {
            jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-src') + ')');
        });
    }

    // Up Button

    $('.pixies_up').on('click', function() {
        $('html, body').animate({scrollTop: 0},200);
        return false;
    })

    // Mobile Menu

        if (jQuery('.mobile_header').length > 0) {
        jQuery('.mobile_header').after('<div class="mobile_menu_wrapper"><ul class="mobile_menu container"/></div>');
        jQuery('.mobile_menu').html(jQuery('.pixies_menu_cont').find('ul.pixies_menu').html());
        jQuery('.mobile_menu_wrapper').hide();
        jQuery('.btn_mobile_menu').on('click', function () {
            jQuery('.mobile_menu_wrapper').stop().slideToggle(300);
            jQuery('.pixies_header').toggleClass('opened');
        });
    }

    // Sharing

    var window_width = jQuery(window).width(),
        window_height = jQuery(window).height(),
        button = jQuery('.pixies_sharing_url_button'),
        input = jQuery('.pixies_sharing_url');


    jQuery('.pixies_sharing_button').on('click', function(){
        var window_width = jQuery(window).width(),
        window_height = jQuery(window).height(),
        pixies_sharing_popup = jQuery('.pixies_sharing_popup');


    setTimeout("window_height = jQuery(window).height();", 100);

    pixies_sharing_popup.width(window_width).height(window_height);
        jQuery(pixies_sharing_popup).addClass('active');
    });

    jQuery('.pixies_sharing_popup_close').on('click', function(){
        jQuery('.pixies_sharing_popup').removeClass('active');
    });

    button.on("click", function(event) {
        event.preventDefault();
        input.select();
    document.execCommand("copy");
        jQuery('.pixies_title_default').addClass('inactive');
        setTimeout("jQuery('.pixies_title_default').css('display', 'none')", 300);
        setTimeout("jQuery('.pixies_title_copied').css('display', 'block');", 300);
        setTimeout("jQuery('.pixies_title_copied').addClass('active');", 350);
    });

    // About Carousel

    $('.owl-carousel1').owlCarousel({
        items: 1,
        loop: true,
        slideSpeed: 200,
        nav: true,
        navText: ["",""],
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 200,
        autoplayHoverPause: true,
    });

    // Works Isotope Grid

    var $grid = $('.grid').imagesLoaded().progress( function() {
        $grid.isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });
    });

    // bind filter button click
    $('.filters-button-group').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value

    $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
        });
    });

    // Works Isotope Packery

    var $grid1 = $('.grid1').imagesLoaded().progress( function() {
        $grid1.isotope({
            layoutMode: 'packery',
            itemSelector: '.grid-item'

        });
    });

      // bind filter button click
    $('.filters-button-group').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value

        $grid1.isotope({ filter: filterValue });
    });
        // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });

    // About Studio Counters

    $('#counts').viewportChecker({
        callbackFunction: function(elem, action){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 2000
            });
        },
    });

    // About Resume Progressbar

    $('.pixies_resume_capabilities').viewportChecker({
        callbackFunction: function(elem, action){
        $('.progressbar').each(function(){
      var t = $(this),
        dataperc = t.attr('data-perc'),
        barperc = Math.round(dataperc*5.69);
      t.find('.bar').animate({width:barperc}, dataperc*4);
      t.find('.label').append('<div class="perc"></div>');

          function perc() {
            var length = t.find('.bar').css('width'),
              perc = Math.round(parseInt(length, 10)/5.69),
              labelpos = (parseInt(length, 10)-25);
            t.find('.label').css('left', labelpos);
            t.find('.perc').text(perc+'%');
          }
            perc();
            setInterval(perc, 0);
        });
        },
    });


    // Works Ribbon

    $('.pixies_ribbon_slider').slick({
        centerMode: true,
        speed: 200,
        autoplay: true,
        centerPadding: '27.3%',
        responsive: [
        {
            breakpoint: 991,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px'
            }
        },
        ]
    });

    // Mail
    jQuery('.pixies_contact_form button[name=submit]').click(function(){
        var this_contact = jQuery(this).parents('form');
        jQuery.post('mail.php', {
            send_mail: 'true',
            form_name: this_contact.find('input[name=user-name]').val(),
            form_email: this_contact.find('input[name=email]').val(),
            form_text: this_contact.find('input[name=join]').val(),
        }).done(function (data) {
            alert(data);
        });

        return false;
    });

});

jQuery(window).on('load', function(){
    var window_width = jQuery(window).width(),
        window_height = jQuery(window).height();

    if (jQuery('div').is('.pixies_portfolio_listing_cont.view_type_full')) {
        var container = jQuery('.pixies_portfolio_listing_cont.view_type_full');

        jQuery(container).find('.pixies_thumbnails_container').width(window_width).height(window_height);
        jQuery(container).find('.pixies_portfolio_content_container').width(window_width).height(window_height);
        pixies_portfolio_listing_view_type_fullscreen();
    }

    var window_width = jQuery(window).width(),
        window_height = jQuery(window).height();

    if (jQuery('div').is('.pixies_portfolio_listing_cont.view_type_full_2')) {
        var pixies_port_cont = jQuery('.pixies_portfolio_listing_cont.view_type_full_2'),
            pixies_all_item = jQuery(pixies_port_cont).attr('data-all-item'),
            pixies_trigger_height = window_height / pixies_all_item;

        jQuery('body').height(window_height);
        jQuery(pixies_port_cont).width(window_width).height(window_height);
        jQuery('.pixies_triggers_cont a').height(pixies_trigger_height);
        pixies_portfolio_listing_view_type_fullscreen_type_2();
    }

    // Carousel

    $('.owl-carousel2').owlCarousel({
        margin:0,
        loop:true,
        slideSpeed:200,
        nav: true,
        navText: ["",""],
        dots: true,
        autoplay: true,
        autoplayTimeout:2000,
        smartSpeed:200,
        autoplayHoverPause:true,
        autoWidth:true,
        items:4
    });
});

jQuery(window).resize(function(){
    var window_width = jQuery(window).width(),
        window_height = jQuery(window).height();

    if (jQuery('div').is('.pixies_portfolio_listing_cont.view_type_full')) {
        var container = jQuery('.pixies_portfolio_listing_cont.view_type_full');

        jQuery(container).find('.pixies_thumbnails_container').width(window_width).height(window_height);
        jQuery(container).find('.pixies_portfolio_content_container').width(window_width).height(window_height);
    }

    var window_width = jQuery(window).width(),
        window_height = jQuery(window).height();

    if (jQuery('div').is('.pixies_portfolio_listing_cont.view_type_full_2')) {
        var pixies_port_cont = jQuery('.pixies_portfolio_listing_cont.view_type_full_2'),
            pixies_all_item = jQuery(pixies_port_cont).attr('data-all-item'),
            pixies_trigger_height = window_height / pixies_all_item;

        jQuery('body').height(window_height);
        jQuery(pixies_port_cont).width(window_width).height(window_height);
        jQuery('.pixies_triggers_cont a').height(pixies_trigger_height);
    }
});

    // Fullscreen

function pixies_portfolio_listing_view_type_fullscreen() {
    jQuery('.pixies_portfolio_listing_cont.view_type_full').each(function(){
        var container = jQuery(this),
            image_container = container.find('.pixies_thumbnails_container'),
            content_container = container.find('.pixies_portfolio_content_container'),
            content_output_wrapper = content_container.find('.pixies_portfolio_content_wrapper'),
            items_count = image_container.children().length,
            thumb_item = image_container.find('.pixies_image_cont'),
            content_item = content_output_wrapper.find('.pixies_portfolio_cont');

        setTimeout("jQuery('.pixies_portfolio_listing_cont.view_type_full').css('opacity', '1')", 500);

        if (thumb_item.is('.current_item')) {} else {
            thumb_item.first().addClass('current_item');
            content_item.first().addClass('current_item');
        }

        // Next Post
        jQuery('.pixies_next_nav_button').on('click', function(){
            pixies_next_post();
        });

        jQuery('body').on('wheel swipeleft swiperight swipeup swipedown', function(){
            pixies_next_post();
        });

        // Previous Post
        jQuery('.pixies_prev_nav_button').on('click', function(){
            pixies_prev_post();
        });

        function pixies_next_post() {
            var current_thumb = image_container.find('.current_item'),
                thumb_number = current_thumb.attr('data-number'),
                counter = container.attr('data-counter');

            if (counter == '1') {
                counter++;
                jQuery(container).attr('data-counter', counter);
                image_container.addClass('action');
                jQuery(image_container).find('.prev_item').removeClass('prev_item');

                if (thumb_number < items_count) {
                    jQuery(image_container).find('.current_item').next().addClass('next_item');
                    setTimeout("jQuery('.pixies_portfolio_content_wrapper').find('.current_item').removeClass('current_item').next().addClass('current_item')", 600);
                } else {
                    thumb_item.first().addClass('next_item');
                    setTimeout("jQuery('.pixies_portfolio_content_wrapper').find('.current_item').removeClass('current_item')", 600);
                    setTimeout("jQuery('.pixies_portfolio_content_wrapper .pixies_portfolio_cont').first().addClass('current_item')", 600);
                }

                setTimeout("jQuery('.pixies_thumbnails_container').find('.current_item').removeClass('current_item').addClass('prev_item')", 600);
                setTimeout("jQuery('.pixies_thumbnails_container').find('.next_item').removeClass('next_item').addClass('current_item')", 600);
                setTimeout("jQuery('.pixies_thumbnails_container').removeClass('action')", 1200);
                setTimeout("jQuery('.pixies_portfolio_listing_cont.view_type_full').attr('data-counter', '1')", 1800);
            }
        }

        function pixies_prev_post() {
            var current_thumb = image_container.find('.current_item'),
                thumb_number = current_thumb.attr('data-number'),
                counter = container.attr('data-counter');

            if (counter == '1') {
                counter++;
                jQuery(container).attr('data-counter', counter);
                image_container.addClass('action');
                jQuery(image_container).find('.prev_item').removeClass('prev_item');

                if (thumb_number == '1') {
                    thumb_item.last().addClass('next_item');
                    setTimeout("jQuery('.pixies_portfolio_content_wrapper').find('.current_item').removeClass('current_item')", 600);
                    setTimeout("jQuery('.pixies_portfolio_content_wrapper .pixies_portfolio_cont').last().addClass('current_item')", 600);
                } else {
                    jQuery(image_container).find('.current_item').prev().addClass('next_item');
                    setTimeout("jQuery('.pixies_portfolio_content_wrapper').find('.current_item').removeClass('current_item').prev().addClass('current_item')", 600);
                }

                setTimeout("jQuery('.pixies_thumbnails_container').find('.current_item').removeClass('current_item').addClass('prev_item')", 600);
                setTimeout("jQuery('.pixies_thumbnails_container').find('.next_item').removeClass('next_item').addClass('current_item')", 600);
                setTimeout("jQuery('.pixies_thumbnails_container').removeClass('action')", 1200);
                setTimeout("jQuery('.pixies_portfolio_listing_cont.view_type_full').attr('data-counter', '1')", 1800);
            }
        }
    });
}

    // Portfolio

function pixies_portfolio_listing_view_type_fullscreen_type_2() {
    jQuery('.pixies_portfolio_listing_cont.view_type_full_2').each(function(){
        var container = jQuery(this),
            image_container = container.find('.pixies_thumbnails_container'),
            content_container = container.find('.pixies_portfolio_content_container'),
            triggers_container = container.find('.pixies_triggers_cont'),
            items_count = image_container.children().length,
            thumb_item = image_container.find('.pixies_image_cont'),
            trigger_item = triggers_container.find('.pixies_portfolio_trigger'),
            content_item = content_container.find('.pixies_portfolio_cont_item');

        setTimeout("jQuery('.pixies_portfolio_listing_cont.view_type_full_2').css('opacity', '1')", 600);

        if (thumb_item.is('.current_item')) {} else {
            thumb_item.first().removeClass('next_item').addClass('current_item');
            content_item.first().addClass('current_item');
            trigger_item.first().addClass('current_item');
        }

        jQuery(trigger_item).on('click', function(){
            var old_current_number = triggers_container.find('.current_item').attr('data-number'),
                current_number = jQuery(this).attr('data-number');

            if (current_number !== old_current_number) {
                jQuery(triggers_container).find('.current_item').removeClass('current_item');
                jQuery(this).addClass('current_item');
                jQuery(content_container).find('.current_item').removeClass('current_item');
                jQuery(content_container).find('[data-number="' + current_number + '"]').addClass('current_item');
                jQuery(image_container).find('.current_item').removeClass('current_item').addClass('prev_item');
                jQuery(image_container).find('[data-number="' + current_number + '"]').removeClass('next_item').addClass('current_item');

                setTimeout("jQuery('.pixies_thumbnails_container').find('.prev_item').removeClass('prev_item').addClass('next_item')", 600);
            }
        });

        jQuery('body').on('wheel swipeleft swiperight swipeup swipedown', function(){
            var current_thumb = image_container.find('.current_item'),
                thumb_number = current_thumb.attr('data-number'),
                counter = container.attr('data-counter');

            if (counter == '1') {
                counter++;
                jQuery(container).attr('data-counter', counter);

                if (thumb_number < items_count) {
                    jQuery(image_container).find('.current_item').removeClass('current_item').addClass('prev_item').next().removeClass('next_item').addClass('current_item');
                    jQuery(content_container).find('.current_item').removeClass('current_item').next().addClass('current_item');
                    jQuery(triggers_container).find('.current_item').removeClass('current_item').next().addClass('current_item');
                } else {
                    jQuery(image_container).find('.current_item').removeClass('current_item').addClass('prev_item');
                    jQuery(thumb_item).first().removeClass('next_item').addClass('current_item');
                    jQuery(content_container).find('.current_item').removeClass('current_item');
                    jQuery(content_item).first().addClass('current_item');
                    jQuery(triggers_container).find('.current_item').removeClass('current_item');
                    jQuery(trigger_item).first().addClass('current_item');
                }

                setTimeout("jQuery('.pixies_thumbnails_container').find('.prev_item').removeClass('prev_item').addClass('next_item')", 600);
                setTimeout("jQuery('.pixies_portfolio_listing_cont.view_type_full_2').attr('data-counter', '1')", 1000);
            }
        });
    });
}

// Load none
$(function(){
    $("loadnone").slice(0, 10).show(); // select the first ten
    $("#load").click(function(e){ // click event for load more
        e.preventDefault();
        $("div:hidden").slice(0, 10).show(); // select next 10 hidden divs and show them
        // if($("div:hidden").length == 0){ // check if any hidden divs still exist
        //     alert("No more divs"); // alert if there are none left
        // }
    });
});
