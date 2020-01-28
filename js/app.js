$(document).ready(function () {
     $(".item-parent").isotope();
});

$(".project-menu li").on('click' , function () {

     $(".project-menu li").removeClass("activ");
     $(this).addClass("activ");
    

     var selector = $(this).attr('data-filter');
     $(".item-parent").isotope({
          filter : selector
     });
});