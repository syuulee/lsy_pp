$(function () {
    $('.left_slide').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        fade: true,
        controls: true,
        // dots: true,
        // infinite: true,
        // speed: 300,
        // slidesToShow: 2,
        // centerMode: true,
        // variableWidth: true
    });
    $('.left_slide').on('init afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.slide .intro>li').eq(c).addClass('on').siblings().removeClass('on');
    })


    $('.slide .left_arrow i:nth-child(1)').on('click', function () {
        $('.left_slide').slick('slickNext')
    });

    $('.slide .left_arrow i:nth-child(2)').on('click', function () {
        $('.left_slide').slick('slickPrev')
    });

    $('.slide02').slick({
        infinite: true,
        arrows: true,
        fade: true,
    });


    $('#fl').on('change', function () {
        console.log($(this), $(this).val())
        var lnk = $(this).val();
        lnk && window.open(lnk);
    });


    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });

    $(window).on('scroll', function () {
        var up = $(window).scrollTop();
        if (up > 1200) {
            $('.toTop').fadeIn(300)
        } else {
            $('.toTop').fadeOut(1000)
        }
    });
    // $('.slide').slick({
    //     arrows: false,
    //     dots: true,
    //     pauseOnHover: false,
    // });
    // const $slider = $('.slide');
    // $slider
    //     .on('init', () => {
    //         mouseWheel($slider);
    //     })
    //     .slick({
    //         dots: true,
    //         vertical: true,
    //         infinite: false,
    //     });
    // function mouseWheel($slider) {
    //     $(window).on('wheel', { $slider: $slider }, mouseWheelHandler);
    // }
    // function mouseWheelHandler(event) {
    //     event.preventDefault();
    //     const $slider = event.data.$slider;
    //     const delta = event.originalEvent.deltaY;
    //     if (delta > 0) {
    //         $slider.slick('slickPrev');
    //     } else {
    //         $slider.slick('slickNext');
    //     }
    // }
});

// $('.right_slide').slick({
//     arrows: false,
//     fade: true,
//     slidesToShow: 1,
//     asNavFor: '.left_slide',
// });
// $('.slide .left_arrow i:nth-child(1)').on('click', function () {
//     $('.right_slide').slick('slickPrev');
// });

// $('.slide .left_arrow i:nth-child(2)').on('click', function () {
//     $('.right_slide').slick('slickNext');
// });

// $('.mini_slide').on('init afterChange', function (e, s, c) {
//     $('.sub_intro .intro>li')
//         .eq(c)
//         .addClass('on')
//         .siblings()
//         .removeClass('on');
// });
