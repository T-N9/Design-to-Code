$(document).ready(function () {
    $('#navToggler').click(function(){
        $('#navIcon0').toggleClass('block').toggleClass('hidden');
        $('#navIcon1').toggleClass('hidden').toggleClass('block');
        $('#navbarMD').toggleClass('show');
        $('#navbarMD').toggleClass('hide');
    });
});