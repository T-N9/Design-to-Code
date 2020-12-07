$(document).ready(function () {
    $('#navToggler').click(function(){
        $('#navIcon0').toggleClass('block').toggleClass('hidden');
        $('#navIcon1').toggleClass('hidden').toggleClass('block');
        $('#navbarMD').toggleClass('show');
        $('#navbarMD').toggleClass('hide');
    });
    let screenHeight=$(window).height();
    $(window).scroll(function(){
        let currentPos=$(this).scrollTop();
        if(currentPos>=screenHeight-450){
            $('.my-navbar').addClass('resize-navbar');
        }
        else{
            $('.my-navbar').removeClass('resize-navbar');
        }
    });
});