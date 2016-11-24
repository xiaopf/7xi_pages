$(function(){


var $content=$('#content');
var cWidth=$content.width();
var cHeight=$content.height();
$('ul').width(3*cWidth);
$('ul li').width(cWidth).height(cHeight);

var $aMiddle=$('ul li .a_background_middle');
var $cTop=$('ul li .c_background_top');

var amTop=$aMiddle.offset().top;
var amHeight=$aMiddle.height();
var ctHeight=$cTop.height();
var $boy=$('ul .boy');
var $girl=$('ul .girl');
var $sun=$('ul li .sun');
var $cloud1=$('ul li .cloud1');
var $cloud2=$('ul li .cloud2');
var $bird=$('ul li .bird');

var $slogen=$('ul li .slogen');
var $snow_flower=$('ul li .snow_flower');


var girlLeft=$girl.offset().left;

var boyHeight=$boy.height();
var girlHeight=$girl.height();

var $ul=$('ul');
var $page2=$('.page2');
var $page3=$('.page3');
var door=$('.page2 .door');
var door_left=$('.page2 .door_left');
var door_right=$('.page2 .door_right');











var k1=$page2.width()/1920;
var k2=$page2.height()/950;



$('.wave1').css({
	'transform':'scale('+k1+','+k2+')'
});
$('.wave2').css({
	'transform':'scale('+k1+','+k2+')'
});
$('.wave3').css({
	'transform':'scale('+k1+','+k2+')'
});
$('.wave4').css({
	'transform':'scale('+k1+','+k2+')'
});


$page2.css({
	'left':cWidth
});
$page3.css({
	'left':cWidth*2
});






function init_music(){
	$('#music1').get(0).volume=0.5;
	$('#music2').get(0).volume=0.5;
	$('#music1').get(0).play();
	$('#music2').get(0).pause();
}


function boy_move(){
	$boy.addClass('walk_slow');
}


// 太阳和云朵运动函数
function bg_sun_cloud(){
	var dfd=$.Deferred();
	$sun.animate({
	    'left':-$sun.width(),
	    'top':$sun.height()*1.2
	},5000,'linear');
	$cloud1.animate({
	    'left':'100%'
	},12000,'linear');
    $cloud2.animate({
	    'left':'0%'
	},12000,'linear');
}

// 男孩开始走路，速度是时间控制，pos 是到达位置
function walk(speed,pos){
    var dfd=$.Deferred();
    
	$boy.animate({
	    'left':cWidth*pos  
	},speed,'linear',function(){
		dfd.resolve();
	});
	return dfd.promise();
}

//页面整体滑动 
function scroll(speed,dis){
	var dfd=$.Deferred();
	$ul.animate({
		'left':-dis
	},speed,'linear',function(){
         dfd.resolve();
	});
	return dfd;
}

// 商店门开
function open_door(){
	var dfd=$.Deferred();
	door_left.animate({
		'left':'-50%'
	},500,'linear',function(){
         dfd.resolve();
	});
    door_right.animate({
		'left':'100%'
	},500,'linear',function(){
         dfd.resolve();
	});
	return dfd.promise();
}

// 天空中的飞鸟
function bird_fly(){
	$bird.animate({
	    'left':'-100%' 
	},20000,'linear')
}

function walk_in(){
	var dfd=$.Deferred();
	// 男孩向里走，透明度和大小的变化
    $boy.addClass('walk_in1').addClass('walk_in2');
    // 男孩的坐标变化
	$boy.animate({
       'left':cWidth+door.position().left+door.width()/2-$boy.width()/2, 
	},100,'linear')


	setTimeout(function(){
		dfd.resolve();
	},1800);
	return dfd.promise();

}


// 男孩从商店走出
function walk_out(){
    var dfd=$.Deferred();

    $boy.removeClass('walk_slow').removeClass('walk_in1');
    $boy.addClass('boy_flower').addClass('walk_slow_flower').addClass('walk_in3');

    setTimeout(function(){ 	
      	dfd.resolve();  
    },1800);
    return dfd.promise();
}


// 男孩腿停止走动
function stop_walk(){
	$boy.addClass('stop_walk');
}
// 男孩腿重新开始走动
function re_walk(){
	$boy.removeClass('stop_walk');
}

// 商店灯光变亮
function light_bright(){
	$page2.addClass('page2_bright');
}
// 商店灯光变暗
function light_dark(){
	$page2.removeClass('page2_bright');
}



// 商店延迟2s后关门
function close_door(){
	var dfd=$.Deferred();

    door_left.animate({
			'left':'0%'
		},500,'linear');
	door_right.animate({
			'left':'50%'
		},500,'linear');

    setTimeout(function(){
	    dfd.resolve();	
	},1200);	 
	return dfd.promise();
}



function walk_up(speed){
    var dfd=$.Deferred();
	$boy.animate({
	    'left':2*cWidth+girlLeft-$boy.width()*0.87,
	    'top':$girl.offset().top-(boyHeight-0.99*girlHeight) 
	},speed,'linear',function(){
		dfd.resolve();
	});
	return dfd.promise();
}


function change_cha(){
	var dfd=$.Deferred();
	setTimeout(function(){
		stop_walk();
		$boy.removeClass('walk_slow_flower').removeClass('walk_in2').removeClass('walk_in3');
	    $boy.addClass('boy_flower_last');
	    $girl.addClass('girl_last');
	    
	},3400);

	setTimeout(function(){
	    dfd.resolve();	
	},3500);	 
	return dfd.promise();
}


function turn_around(){
	var dfd=$.Deferred();

	setTimeout(function(){
	    $boy.addClass('boy_turn_around');
		$girl.addClass('girl_turn_around');
		$boy.animate({
		    'left':2*cWidth+girlLeft-$boy.width()*0.788,
		    'top':$girl.offset().top-(boyHeight-0.991*girlHeight)  
		},50,'linear');
	},1200);
    
    setTimeout(function(){
	    dfd.resolve();	
	},1300);

	return dfd.promise();
}


function show_slogen(){
    $slogen.addClass('slogen_show');
    $('#music2').get(0).play();
    $('#music1').get(0).pause();
}


function creat_flower(){
	var dfd=$.Deferred();
	var arr_flower=['images/snowflake/snowflake1.png','images/snowflake/snowflake2.png','images/snowflake/snowflake3.png','images/snowflake/snowflake4.png','images/snowflake/snowflake5.png','images/snowflake/snowflake6.png'];
	var arr_ratateSpeed=[10,15,20,22,30,35,33,18,13,9,25,27];
	setInterval(function(){
	    var getPic=arr_flower[Math.floor(Math.random()*6 )];
	    var getSpeed=arr_ratateSpeed[Math.floor(Math.random()*12)]
		var getLeft=Math.floor(Math.random()*140-30 );
		var getLeftOffset= Math.floor(Math.random()*20+10 );
		var getOpa=Math.floor(Math.random()*60+40)/100;
		var getOpa=Math.floor(Math.random()*60+40)/100;
		var newFlower=$('<div class="snow_flower_rotate"></div>').css({
				    'zIndex':10,
				    'opacity':getOpa,
					'width': '2.1%',
				    'height': '4.1%',
					'position': 'absolute',
					'top':0,	
					'left':getLeft+'%' ,
				    'background': 'url('+getPic+') no-repeat',
				    'background-size': '100% 100%',
				    '-webkit-animation':''+getSpeed+'s snow_flower_rotate infinite',
				    '-moz-animation':''+getSpeed+'s snow_flower_rotate infinite',
				    'animation':''+getSpeed+'s snow_flower_rotate infinite'
		}).animate({
			'top' :'100%',
			'left':getLeft+getLeftOffset+'%'
		},7000,'linear',function(){
			$(this).remove();
		});
        $snow_flower.append(newFlower);
        dfd.resolve();
	},40);
	return dfd.promise();
}

// 







// $ul.css({
// 	'left':-2*cWidth
// });


//动画载入延时1s 执行 给预加载留出时间
setTimeout(start,1000);


function start(){

    init_music();
	boy_move(); 
    bg_sun_cloud();

	$.when(walk(4500,0.6)).then(function(){
		walk(7100,1.5);
		return scroll(7100,cWidth);
	}).then(function(){
		stop_walk();
		bird_fly();
		return open_door();
	}).then(function(){	
        light_bright();
		re_walk();
		return walk_in()      //动画有时间，但是添加属性一下就搞定了
	}).then(function(){
		return walk_out();    
	}).then(function(){
		return close_door();  
	}).then(function(){
		light_dark();
		walk(5100,2.2);
		return scroll(7100,2*cWidth);
	}).then(function(){
		walk_up(1350);
	    return  change_cha();
	}).then(function(){
		return turn_around();  
    }).then(function(){
    	show_slogen();
		return creat_flower();  
    })


}
   


















})