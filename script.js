/* smooth scrolling */
$(document).ready(function(){
    $("#scrollDown").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 350);
    });
});
/* end of */