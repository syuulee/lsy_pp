$(function () {
    $('.heart>a').on('click', function (e) {
        e.preventDefault();
        $('.heart').removeClass('on');
        $('.heart').addClass('on');
    });
});
