$(document).ready(function() {

    $('.accordianheader').click(function(e) {
        $('.activeheader').removeClass('activeheader');
        $(this).addClass('activeheader');
        $('.accordianbody').hide();
        $('.' + $(this).attr('id')).show();
        $('.accord-direction').attr('src', 'images/ionic-ios-arrow-down-2.png');
        $(this).find('.accord-direction').attr('src', 'images/ionic-ios-arrow-up.png');
    });
    //$('.accordianheader:first').click();
    //$('#order-status-table').hide();

    $('#order-status-menu').hide();

    $('.jQorderstatus').click(function(e) {
        e.preventDefault();
        $('#order-status-table').hide();
        $('#order-status-menu').show();
    })

    $('.products-list').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,

        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000


            },
            600: {
                items: 2,
                nav: false,
                dots: false
            },
            1000: {
                items: 4,
                nav: false,
                loop: false,
                dots: true
            }
        }
    });

    $('.school-list-carousel').owlCarousel({
        loop: true,
        margin: 40,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000


            },
            600: {
                items: 2,
                nav: false,
                dots: false
            },
            1000: {
                items: 2,
                nav: false,
                loop: false,
                dots: true
            }
        }
    });





    /*$('.prod-thumb-carousel').owlCarousel({
        loop: true,
        margin: 40,
        thumbs: true,
        thumbsPrerendered: true,
        thumbImage: true,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000


            },
            600: {
                items: 1,
                nav: false,
                dots: true
            },
            1000: {
                items: 1,
                nav: false,
                loop: false,
                dots: true
            }
        }
    });*/

    $('.zoom-image').mouseover(function() {
        $(this).elevateZoom();
    });

    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            autoplay: false,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: []
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function() {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 4,
            dots: true,
            nav: true,
            navText: [],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 4,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }

        /* $(el.target).find(".owl-item").eq(current).find("img").click(function() {
             $(this).elevateZoom();
         });*/
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });





    $('.blog-list').owlCarousel({
        loop: true,
        margin: 40,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000


            },
            600: {
                items: 2,
                nav: false,
                dots: true
            },
            1000: {
                items: 3,
                nav: false,
                loop: false,
                dots: true
            }
        }
    });

    $('.like, .likedummy').click(function() {
        if ($(this).hasClass('dsld')) {
            return false;
        } else {
            $('.likedummy').removeClass('active');
            $(this).toggleClass('active');
        }


    });

    $('.prod-size-moresize').click(function(e) {
        e.preventDefault();
        $('.prodlisthidedummy').toggleClass('moresizelist');
        //if($('.moresizelist').isV)
    });





    $('.list-grid-wrap a').click(function() {

        var targetName = $(this).attr('data-name');
        $('.list-grid-wrap a').removeClass('active');
        $(this).addClass('active');


        if ($('.products-wrap').hasClass('gridview')) {

            $('.products-wrap').removeClass('gridview');
            $('.products-wrap').addClass(targetName);
        } else {
            $('.products-wrap').removeClass('listview');
            $('.products-wrap').addClass(targetName);
        }


    });








    var incrementPlus;
    var incrementMinus;

    var buttonPlus = $(".cart-qty-plus");
    var buttonMinus = $(".cart-qty-minus");

    var incrementPlus = buttonPlus.click(function() {
        var $n = $(this)
            .parent(".qty-num-wrap")
            .find(".qty");
        $n.val(Number($n.val()) + 1);
    });

    var incrementMinus = buttonMinus.click(function() {
        var $n = $(this)
            .parent(".qty-num-wrap")

        .find(".qty");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount - 1);
        }
    });




    $('#prodDescTab').tabCollapse();


    /* changes - feb 08 */
    $('body').click(function(event) {
        if ($(event.target).parents('#menuToggle').length === 0) {
            $('#menuToggle input:checkbox').prop('checked', false)
        }

    });

    function productlist() {
        if ($(window).width() <= 990) { //760
            $(".products-wrap").addClass("listview");
        }
    }
    productlist();
    $(window).resize(function() {
        productlist();
    });







});