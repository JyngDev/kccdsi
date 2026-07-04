    $(function(){
    var quick_btn = $('#scroll_right .right_quick_btn_open');
    $(quick_btn).on('click',function(){
        var quick_right = $('#scroll_right').css('right');
        if(quick_right == '0px'){
            $('#scroll_right').stop(true,true).animate({'right':'-190px'});
            $('#scroll_right .right_quick_btn_open').find('i').attr('class','icon arrow left');
            Cookies.set('checks', 'ucks',{ expires: 1, path: '/' });
        }else if(quick_right == '-190px'){
            $('#scroll_right').stop(true,true).animate({'right':'0px'});
            $('#scroll_right .right_quick_btn_open').find('i').attr('class','icon arrow right');
            Cookies.remove('checks',{ path: '/' });
        }
    });

    if(Cookies.get('checks') == 'ucks'){
        $('#scroll_right').css({'right':'0'});
        $('#scroll_right .right_quick_btn_open').find('i').attr('class','icon arrow left');


    }else{
       $('#scroll_right').css({'right':'-190px'});
        $('#scroll_right .right_quick_btn_open').find('i').attr('class','icon arrow right');
    }
});



/* 우측 스크롤 배너 TOP , BOTTOM */

// top으로 이동
$('.right_quick_top a').click(
    function() {
        $('html, body').stop().animate({scrollTop: $('body').offset().top}, 300);
        return false;
    }
);


// DOM 로드
$(function () {
    $('.scroll_right_cont').todayGoods();
});


    // 화면 초기화 및 갱신 (페이지 및 갯수 표기)
    var init = function () {
        if (setting.total == 0) {
            setting.page = 0;
            element.paging.hide();
        }
        self.find('ul').hide().eq(setting.page - 1).show();
        self.find('.scr_paging .js_current').text(setting.page);
        self.find('.scr_paging .js_total').text(setting.total);
    }


    // 화면 초기화
    init();

