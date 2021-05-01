$(document).ready(function(){
    let screenHeight=$(window).height();
    console.log(screenHeight);

    $(window).scroll(function () {
        let currentPos=$(this).scrollTop();
        console.log(currentPos);
    });
});

function navActive(current){
    $(`.nav-link`).removeClass("active");
    $(`.nav-link[href='#${current}']`).addClass("active");
}
function navScroll(){
    let currentSec=$("section[id]");
    currentSec.waypoint(function(direction){
        if(direction=="down"){
            let currentId=$(this.element).attr('id');
            console.log(currentId);
            navActive(currentId);
        }
    },{offset:'0px'});
    currentSec.waypoint(function(direction){
        if(direction=="up"){
            let currentId=$(this.element).attr('id');
            console.log(currentId);
            navActive(currentId);
        }
    },{offset:'-10px'});
}

navScroll();

let imgRightEvent=document.getElementById('imgRight');
let imgLeftEvent=document.getElementById('imgLeft');

document.getElementById('menuBar').onclick=function(){
    document.getElementById('menuBar').classList.toggle('close');
    document.getElementById('mdNav').classList.toggle('mdNav-animation');
    document.getElementById('mdNav').classList.toggle('mdNav-animation-inverse');
}

document.getElementById('pageSwitch').onclick=function(){
    document.getElementById('bulb').classList.toggle('bulb-light');
    document.getElementById('pageNumbers').classList.toggle('pageSwitch-animation');
    document.getElementById('pageNumbers').classList.toggle('pageSwitch-animation-inverse');
}

imgRightEvent.onclick=function(){
    console.log('Hello Changing Image.');
    var img_1_con=document.getElementById('img-1').classList.contains('d-none');
    var img_2_con=document.getElementById('img-2').classList.contains('d-none');
    var img_3_con=document.getElementById('img-3').classList.contains('d-none');
    if(!img_1_con){
        document.getElementById('img-1').classList.add('d-none');
        document.getElementById('img-2').classList.toggle('d-none');
    }
    if(!img_2_con){
        document.getElementById('img-2').classList.add('d-none');
        document.getElementById('img-3').classList.toggle('d-none');
    }
    if(!img_3_con){
        document.getElementById('img-3').classList.add('d-none');
        document.getElementById('img-1').classList.toggle('d-none');
    }
};
imgLeftEvent.onclick=function(){
    console.log('Hello Changing Image.');
    var img_1_con=document.getElementById('img-1').classList.contains('d-none');
    var img_2_con=document.getElementById('img-2').classList.contains('d-none');
    var img_3_con=document.getElementById('img-3').classList.contains('d-none');
    if(!img_3_con){
        document.getElementById('img-3').classList.add('d-none');
        document.getElementById('img-2').classList.toggle('d-none');
    }
    else if(!img_2_con){
        document.getElementById('img-2').classList.add('d-none');
        document.getElementById('img-1').classList.toggle('d-none');
    }
    else{
        document.getElementById('img-1').classList.add('d-none');
        document.getElementById('img-3').classList.toggle('d-none');
    }
};