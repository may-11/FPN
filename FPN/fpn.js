//dropMenu hover
$(function () {
    $(".navItem").hover(function () {
        $(this).find(".dropDown:not(:animated)").slideDown(500);
    }, function () {
        $(this).find(".dropDown").slideUp(300);
    });
});
