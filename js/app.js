// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

$(document).foundation();
$("#click").click(function () {
    return $("html, body").animate({
        scrollTop: $("#top").offset().top
    }, 700);
});