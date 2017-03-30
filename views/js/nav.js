/**
 * Created by Dejavue on 2017/3/30.
 */
    var $nav=$("#nav-bar"),
        $hide_nav=$("#hide_nav"),
        $spinner1=$(".spinner1"),
        $spinner2=$(".spinner2"),
        $spinner3=$(".spinner3"),
        $top=$("#toTop");
//        引用toggle方法
    $.fn.toggle = function( fn, fn2 ) {
        var args = arguments,guid = fn.guid || $.guid++,i=0,
            toggle = function( event ) {
                var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
                $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
                event.preventDefault();
                return args[ lastToggle ].apply( this, arguments ) || false;
            };
        toggle.guid = guid;
        while ( i < args.length ) {
            args[ i++ ].guid = guid;
        }
        return this.click( toggle );
    };
//nav-bar点击变化
    $nav.toggle(function () {
        $spinner1.css({
            transform:'rotate(45deg) translateX(5px) translateY(6px)'
        },700);
        $spinner2.hide(700);
        $spinner3.css({
            transform:'rotate(-45deg) translateX(8px) translateY(-11px)'
        },700);
        $(this).css({
            background:"#ffa304",
        })
        $hide_nav.slideDown();
    },function () {
        $spinner1.css({
            transform:'rotate(0deg)'
        },700);
        $spinner2.show(700);
        $spinner3.css({
            transform:'rotate(-0deg)'
        },700);
        $(this).children("span").removeClass("move");
        $(this).css({
            background:"#00a0e9",
        });
        $hide_nav.slideUp();
    });
//返回顶部

    $top.click(function () {
        $("body,html").animate({
            scrollTop:0
        },800)
    });
