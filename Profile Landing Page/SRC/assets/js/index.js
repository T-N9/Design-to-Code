$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        // $('.my-md-menu').toggleClass('d-none');
        $('.my-md-menu').toggleClass('my-menu-animation-in');
        $('.my-md-menu').toggleClass('my-menu-animation-out');
    });
// new WOW().init();

    let screenHeight=$(window).height();
    // console.log(screenHeight);

    $(window).scroll(function(){
        let currentPos=$(this).scrollTop();
        // console.log(currentPos);
        if(currentPos>=screenHeight-300){
            console.log("hello");
        }
        else{
            $(".topPage").removeClass('d-block');
            $(".topPage").addClass('d-none');
        }
    });

    var waypoint = new Waypoint({
        element: document.getElementById('about'),
        handler: function(direction) {
          $(".topPage").removeClass('d-none');
          $(".topPage").addClass('d-block');
        },
        offset: '0px'
    });

    function navActive(current){
        $(`.nav-link`).removeClass("nav-active");
        $(`.nav-link[href='#${current}']`).addClass("nav-active");
    }
    function navActive_md(current){
        $(`.nav-md-link`).removeClass("nav-active");
        $(`.nav-md-link[href='#${current}']`).addClass("nav-active");
    }
    function navScroll(){
        let currentSec=$("section[id]");
        currentSec.waypoint(function(direction){
            if(direction=="down"){
                let currentId=$(this.element).attr('id');
                // console.log(currentId);
                navActive(currentId);
                navActive_md(currentId);
            }
        },{offset:'0px'});
        currentSec.waypoint(function(direction){
            if(direction=="up"){
                let currentId=$(this.element).attr('id');
                // console.log(currentId);
                navActive(currentId);
                navActive_md(currentId);
            }
        },{offset:'-10px'});
    }
    navScroll();
});

