$('#loadHeader').load('header.html');
$('#loadFooter').load('footer.html');


//到达动画
$('.wp1').waypoint(function() {
		$(this).addClass('animated fadeInLeft');
	}, {
		offset: '60%'
	});
$('.wp8').waypoint(function() {
		$(this).addClass('animated fadeInRight');
}, {
	offset: '60%'
});
$('.wp2').waypoint(function() {
	$(this).addClass('animated fadeInUp');
}, {
	offset: '60%'
});
$('.wp3').waypoint(function() {
	$(this).addClass('animated fadeInDown');
}, {
	offset: '55%'
});
$('.wp4').waypoint(function() {
	$(this).addClass('animated fadeInDown');
}, {
	offset: '60%'
});
$('.wp5').waypoint(function() {
	$(this).addClass('animated fadeInUp');
}, {
	offset: '60%'
});
$('.wp6').waypoint(function() {
	$(this).addClass('animated fadeInDown');
}, {
	offset: '60%'
});
$('.wp7').waypoint(function() {
	$(this).addClass('animated bounceInUp');
}, {
	offset: '60%'
});
$('.wp9').waypoint(function() {
	$(this).addClass('animated bounceIn');
}, {
	offset: '60%'
});

//返回顶部
$(window).scroll(function() {
	if ($(window).scrollTop() > 200) {
		$('.backTop').fadeIn(300);
	} else {
		$('.backTop').fadeOut(300);
	}
});

$('body').delegate('.backTop', 'click', function() {
	$("body,html").animate({
		scrollTop: "0px"
	}, 1000);
})



//判断设备
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
       return true;
    } else {
        return false;
    }
}

//电话浮动
var ie9 = navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<=9;
$(window).scroll(function() {
	if ($(window).scrollTop() > 100) {
		if(ie9){
			$('.floatTel').show();
		}else{
			//$('.floatTel').removeClass('show animated fadeOutRight');
			$('.floatTel'). addClass('show animated fadeInRight');
		}
	} else {
		if(ie9){
			$('.floatTel').hide();
		}else{
			$('.floatTel').removeClass('show animated fadeInRight');
			//$('.floatTel').addClass('show animated fadeOutRight');
		}
	}
});

if(browserRedirect()){//移动端设备
	$('body').delegate('.floatTel','click',function(){
		$(this).toggleClass('change');
		if($(this).hasClass('change')){
			setTimeout(function(){
				window.location.href='tel:4000278181'
				// window.location.href='tel:4000288181'
			},500)
		}
		
	})
}



//导航变化
/*$(window).scroll(function() {
	if ($(window).scrollTop() > 180 && screen.availWidth>900) {
		$('#header').addClass('position');
		$('#header,.navMain,.toggleBtn').addClass('change');
	} else {
		$('#header').removeClass('position')
		$('#header,.navMain,.toggleBtn').removeClass('change');
	}
});*/

$('body').delegate('.backTop', 'click', function() {
	$("body,html").animate({
		scrollTop: "0px"
	}, 1000);
})
//顶部菜单显示
$('.tabBox .showMenu').click(function(){
	$(this).toggleClass('fa-caret-down fa-caret-up')
	$(this).parents('.tabBox').find('.col-md-2').not('.active,.showMore').slideToggle();
})

//电话号码验证
function testTel(val){
	var myreg = /^1[3|4|5|7|8][0-9]{9}$/; 
	if(!myreg.test(val))
	{ 
	    //alertfunc('请输入有效的手机号码！',2000); 
	    return false; 
	} else{
		return true;
	}
}
