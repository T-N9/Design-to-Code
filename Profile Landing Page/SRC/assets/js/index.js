$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.my-md-menu').toggleClass('my-menu-animation-in');
        $('.my-md-menu').toggleClass('my-menu-animation-out');
        let icon_con=$('.my-md-menu').hasClass('my-menu-animation-in');
        if(icon_con){
            $('#toggler-icon').removeClass('fa-times').addClass('fa-bars');
           
        }else{
            $('#toggler-icon').removeClass('fa-bars').addClass('fa-times');
        }
    });
    $('.nav-md-link').click(function(){
        $('.my-md-menu').addClass('my-menu-animation-in');
        $('.my-md-menu').removeClass('my-menu-animation-out');
        $('#toggler-icon').removeClass('fa-times').addClass('fa-bars');
    });
    // new WOW().init();
    function navActive(current){
        $(`.nav-link`).removeClass("nav-active");
        $(`.nav-link[href='#${current}']`).addClass("nav-active");
    }
    function navActive_md(current){
        $(`.nav-md-link`).removeClass("nav-active-md");
        $(`.nav-md-link[href='#${current}']`).addClass("nav-active-md");
    }
    function navScroll(){
        let currentSec=$("section[id]");
        currentSec.waypoint(function(direction){
            if(direction=="down"){
                let currentId=$(this.element).attr('id');
                navActive(currentId);
                navActive_md(currentId);
            }
        },{offset:'0px'});
        currentSec.waypoint(function(direction){
            if(direction=="up"){
                let currentId=$(this.element).attr('id');
                navActive(currentId);
                navActive_md(currentId);
            }
        },{offset:'-10px'});
    }
    navScroll();

    $(window).on("load",function(){
        $(".loader-page").fadeOut(500,function(){
            this.remove();
        });
    });
});

