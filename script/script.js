var img_arr = 	[   "https://xiaopf.github.io/7xi_pages/images/background/a_background_bottom.png",
					"https://xiaopf.github.io/7xi_pages/images/background/a_background_middle.png",
					"https://xiaopf.github.io/7xi_pages/images/background/a_background_top_00.png",
					"https://xiaopf.github.io/7xi_pages/images/background/c_background_bottom.png",
					"https://xiaopf.github.io/7xi_pages/images/background/c_background_middle.png",
					"https://xiaopf.github.io/7xi_pages/images/background/c_background_top.png",
					"https://xiaopf.github.io/7xi_pages/images/QixiB-bright_00.png",
					"https://xiaopf.github.io/7xi_pages/images/QixiB-dark_00.png",
					"https://xiaopf.github.io/7xi_pages/images/bird.png",
					"https://xiaopf.github.io/7xi_pages/images/boy_00.png",
					"https://xiaopf.github.io/7xi_pages/images/cloud1.png",
					"https://xiaopf.github.io/7xi_pages/images/cloud2.png",
					"https://xiaopf.github.io/7xi_pages/images/door-left.png",
					"https://xiaopf.github.io/7xi_pages/images/door-right.png",
					"https://xiaopf.github.io/7xi_pages/images/girl.png",
					"https://xiaopf.github.io/7xi_pages/images/slogen.png",
					"https://xiaopf.github.io/7xi_pages/images/stars.png",
					"https://xiaopf.github.io/7xi_pages/images/sun.png",
					"https://xiaopf.github.io/7xi_pages/images/waves.png"
				]



$(function(){



	let img_len = img_arr.length;
	var num = img_len;


	for(let i = 0; i <= img_len; i++){
		let img = new Image();
		img.src = img_arr[i];

		img.onload=function(){
			num --;

			if(num <= 3){
			    $('.progress').hide();
			    setTimeout(start,1000);
			}
		}

	}



var $content=$('#content');
var cWidth=$content.width();
var cHeight=$content.height();



document.documentElement.style.fontSize = 20*(cWidth/320) + 'px';





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
	$sun.stop().animate({
	    'left':-$sun.width(),
	    'top':$sun.height()*1.2
	},5000,'linear');
	$cloud1.stop().animate({
	    'left':'100%'
	},12000,'linear');
    $cloud2.stop().animate({
	    'left':'0%'
	},12000,'linear');
}

// 男孩开始走路，速度是时间控制，pos 是到达位置
function walk(speed,pos){

    
	$boy.stop().animate({
	    'left':cWidth*pos  
	},speed,'linear')
}

//页面整体滑动 
function scroll(speed,dis){
	$ul.stop().animate({
		'left':-dis
	},speed,'linear');



}

// 商店门开
function open_door(){
	door_left.stop().animate({
		'left':'-50%'
	},500,'linear');
    door_right.stop().animate({
		'left':'100%'
	},500,'linear');
}

// 天空中的飞鸟
function bird_fly(){
	$bird.stop().animate({
	    'left':'-100%' 
	},20000,'linear')
}

function walk_in(){
	// 男孩向里走，透明度和大小的变化
    $boy.addClass('walk_in1').addClass('walk_in2');
    // 男孩的坐标变化
	$boy.stop().animate({
       'left':cWidth+door.position().left+door.width()/2-$boy.width()/2, 
	},100,'linear')



}


// 男孩从商店走出
function walk_out(){

// 
    $boy.removeClass('walk_slow').removeClass('walk_in1');
    $boy.addClass('boy_flower').addClass('walk_slow_flower').addClass('walk_in3');
    
    setTimeout(function(){
    	$boy.removeClass('walk_in2');
    },2000)
    


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

    door_left.stop().animate({
			'left':'0%'
		},500,'linear');
	door_right.stop().animate({
			'left':'50%'
		},500,'linear');


}



function walk_up(speed){

	$boy.stop().animate({
	    'left':2*cWidth+girlLeft-$boy.width()*0.87,
	    'top':$girl.offset().top-(boyHeight-0.99*girlHeight) 
	},speed,'linear');

}


function change_cha(){
	stop_walk();
	setTimeout(function(){
		
		$boy.removeClass('walk_slow_flower').removeClass('walk_in3');
	    $boy.addClass('boy_flower_last');
	    $girl.addClass('girl_last');
	    
	},500);


}


function turn_around(){

	setTimeout(function(){
	    $boy.addClass('boy_turn_around');
		$girl.addClass('girl_turn_around');
		$boy.stop().animate({
		    'left':2*cWidth+girlLeft-$boy.width()*0.788,
		    'top':$girl.offset().top-(boyHeight-0.991*girlHeight)  
		},50,'linear');
	},1200);
    

}


function show_slogen(){
    $slogen.addClass('slogen_show');
    $('#music2').get(0).play();
    $('#music1').get(0).pause();
}

// $('.pages').css({

//     'transform': 'translateX(-3840px)',
// })

// creat_flower();

function creat_flower(){
	var arr_flower=['images/snowflake/snowflake1.png','images/snowflake/snowflake2.png','images/snowflake/snowflake3.png','images/snowflake/snowflake4.png','images/snowflake/snowflake5.png','images/snowflake/snowflake6.png'];
	var arr_ratateSpeed=[10,15,20,22,30,35,33,18,13,9,25,27];
	clearInterval(timer);
	var timer = setInterval(function(){
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
		}).stop().animate({
			'top' :'100%',
			'left':getLeft+getLeftOffset+'%'
		},7000,'linear',function(){
			$(this).remove();
		});
        $snow_flower.append(newFlower);
 
        $('.snow_flower_rotate').each(function(){
        	if(parseInt($(this).css("top")) >= cHeight){
        		$(this).remove();
        	}
        });

        console.log($('.snow_flower_rotate').length);

	},40);

}

// 







// $ul.css({
// 	'left':-2*cWidth
// });


// 动画载入延时1s 执行 给预加载留出时间



// setTimeout(start,1000);

  

function start(){
    let promise = function(time,num){
      	return  new Promise(function(resolve,reject){

      		if(num === 1){
      			init_music();
      			boy_move(); 
      			bg_sun_cloud();
      			walk(4500,0.6);
      		}


   		   	  setTimeout(function(){
   		   	  	 resolve()
   		   	  },time)
   		   	})
      }


    promise(4500,1)
    .then(function(value){

  		walk(7100,1.5);
  		scroll(7100,cWidth);
      	return promise(7300,2)

    })

    .then(function(value){

      	stop_walk();
      	bird_fly();
      	open_door();
      	light_bright();
      	return promise(500,3)

    })
    .then(function(value){
  	        
		re_walk();
		walk_in() 

      	return promise(2000,4)
    })

    .then(function(value){
        	        
      	walk_out()
    	return promise(1000,5)

    })

    .then(function(value){
          	        
    	close_door();
    	light_dark();

      	return promise(1000,6)
    })


    .then(function(value){
        	        
      	walk(7100,2.2)
      	scroll(7100,2*cWidth);

    	return promise(7500,7)
    })

    .then(function(value){

    	walk_up(2500)
    	return promise(2400,8)
    })

    .then(function(value){

    	change_cha()
    	
    	return promise(1000,8)
    })

    .then(function(value){

    	turn_around();
    	return promise(2000,8)
    })

    .then(function(value){

    	show_slogen();
    	return promise(1000,8)
    })

    .then(function(value){
        creat_flower()
     })

  }
















})