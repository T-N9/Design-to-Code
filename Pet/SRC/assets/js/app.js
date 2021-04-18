$(document).ready(function () {
    $('#navToggler').click(function(){
        $('#navIcon0').toggleClass('block').toggleClass('hidden');
        $('#navIcon1').toggleClass('hidden').toggleClass('block');
        $('#navbarMD').toggleClass('show');
        $('#navbarMD').toggleClass('hide');
    });
    $('.nav-item').click(function(){
        $('#navbarMD').toggleClass('hide');
        $('#navIcon0').toggleClass('block').toggleClass('hidden');
        $('#navIcon1').toggleClass('hidden').toggleClass('block');
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
    function navActive(current){
        $(`.nav-link`).removeClass("nav-active");
        $(`.nav-link[id='_${current}']`).addClass("nav-active");
        console.log("hello ii");
    }
    function navActive_md(current){
        $(`.nav-lg-link`).removeClass("nav-lg-active");
        $(`.nav-lg-link[id='_${current}']`).addClass("nav-lg-active");
        console.log("hello ddd");

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
});