/**
 * Created by Dejavue on 2017/3/30.
 */
$(function () {
    var $tab_content=$(".service_tab_content"),
        $tab=$(".tabs"),
        $photo_container=$(".photo_show").find("div.col-md-12"),
        $photo_container_big=$(".photo_show").find("div.col-md-6"),
        $about=$(".about");
    $tab.hover(function () {
        var i=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $tab_content.eq(i).addClass("active").siblings().removeClass("active");
    });
    //图片放大效果
    toScale($photo_container_big,true);
    toScale($photo_container);
    toScale($about);
    function toScale(obj,bol) {
        obj.hover(function () {
            $(this).find("img").css({
                webkitTransform:'scale(1)',
                transform:'scale(1.2)'
            });
            if(bol){
                $(this).find('div.left').animate({
                    left:'-50%'
                });
                $(this).find('div.right').animate({
                    left:'50%'
                });
            }else{
                $(this).find("div.empty").slideDown(900);
            }
        },function () {
            $(this).find("img").css({
                webkitTransform:'scale(1)',
                transform:'scale(1)'
            });
            if(bol){
                $(this).find('div.left').animate({
                    left:'-100%'
                });
                $(this).find('div.right').animate({
                    left:'100%'
                });
            }else{
                $(this).find("div.empty").hide(900);
            }
        })
    }

})