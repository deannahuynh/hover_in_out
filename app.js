$(document).ready(function() {
    $("img").hover(function() {
        var newImg = $(this).attr("data-alt-src");
        $(this).attr("src", newImg)
    }, function() {
        var oldImg = $(this).attr("data-alt-src-2");
        $(this).attr("src", oldImg)
    });
});