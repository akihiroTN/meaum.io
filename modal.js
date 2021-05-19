$(function(){
    $('.modal').click(function(){
        $('.modalmenu').fadeIn();
        return false;
    })
    $('.close').click(function(){
        $('.modalmenu').fadeOut();
        return false;
    })
});