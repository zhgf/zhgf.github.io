(function(root, factory) {
	//amd
	if (typeof define === 'function' && define.amd) {
		define(['$'], factory);
	} else if (typeof exports === 'object') { //umd
		module.exports = factory();
	} else {
		root.dragPop = factory(window.Zepto || window.jQuery || $);
	}
})(this, function($) {

	var dragPop = function(settings) {
		var defaults = {
			title: '',
			content: '',
			handle: '.title',
			minBackBtn: false, /* 指定窗口缩小后还原目标 例'#btn' */
			minWidth: 300,
			minHeight: 160,			
			center: true, /* 初始化居中 */
			lock: false, /* 遮罩层 */	
		};
		this.options = $.extend({},defaults,settings);

		var rnd = Math.random().toString().replace('.', '');
		this.id = 'dragPop_' + rnd;
		this.dom();
		this.init();
	};
	dragPop.prototype = {
		dom: function(){
			var _this = this;			
			// dom	
			var dragHtml ='<div id="'+_this.id+'" class="dragPop">';
					dragHtml +='<div class="dragBox">';
						dragHtml += _this.options.title?'<div class="title"><div class="titleTxt">'+ _this.options.title +'</div></div>':'';	
						dragHtml += '<div class="content">'+ _this.options.content +'</div>';
						dragHtml += '<div class="tools">';
							dragHtml += '<div class="hTools">';
								dragHtml += '<div class="min" title="最小化"></div>';
					        	dragHtml += '<div class="max" title="最大化"></div>';
					        	dragHtml += '<div class="revert" title="还原"></div>';
					        	dragHtml += '<div class="close" title="关闭"></div>';
				        	dragHtml += '</div>';
							dragHtml += '<div class="resizeL"></div>';
					    	dragHtml += '<div class="resizeT"></div>';
					    	dragHtml += '<div class="resizeR"></div>';
					    	dragHtml += '<div class="resizeB"></div>';
					    	dragHtml += '<div class="resizeLT"></div>';
					    	dragHtml += '<div class="resizeTR"></div>';
					    	dragHtml += '<div class="resizeBR"></div>';
					    	dragHtml += '<div class="resizeLB"></div>';
		    			dragHtml += '</div>';
		    		dragHtml += '</div>';
			    	if(_this.options.lock){
			    		dragHtml += '<div class="dragPopMask"></div>';
			    	}
			    	if(_this.options.minBackBtn){
			    		dragHtml += '<div class="minBackBtn" title="还原"></div>';
			    	}		    		
		    	dragHtml += '</div>';
		    // 
		    $('body').append(dragHtml);
		    // 方便后续dom操作
		    _this.drag = $('#'+this.id);
		    _this.container = _this.drag.find('.dragBox');
		    _this.mask = _this.drag.find('.dragPopMask');
		    _this.minBackBtn = _this.drag.find('.minBackBtn');
		},
		init: function() {	
			var _this = this;
			// 初始化 窗口隐藏 需其他操作触发
			_this.hideFunc();
			_this.minBackBtn.hide();
		    // 初始化宽高
		    _this.container.css({
				'width': _this.options.minWidth,
				'height':_this.options.minHeight
		    })
		    // 初始化居中
		    if(_this.options.center){
		    	 _this.container.css({
			    	'top': (document.documentElement.clientHeight - _this.options.minHeight) / 2,
					'left': (document.documentElement.clientWidth - _this.options.minWidth) / 2
				})
		    }		    
		    // 拖拽调用
		    _this.move(_this.options.handle);
			// 最小化
			_this.container.on('click','.min', function (){
				_this.minsize()
			});
			// 最小化后还原
			_this.minBackBtn.on('click',function (){	
				_this.showFunc()
			});	 
			// 最大化
			_this.container.on('click','.max', function (){
				_this.maxsize()
			});
			// 最大化后还原
			_this.container.on('click','.revert',function (){	
				_this.midsize()
			});			
			// 关闭
			_this.container.on('click','.close', function (){
				_this.hideFunc()
			});		
			// 四边 拉动
			_this.resize(_this.drag.find('.resizeL'), true, false, false, true);
			_this.resize(_this.drag.find('.resizeT'), false, true, true, false);
			_this.resize(_this.drag.find('.resizeR'), false, false, false, true);
			_this.resize(_this.drag.find('.resizeB'), false, false, true, false);
			// 四角 拉动
			_this.resize(_this.drag.find('.resizeLT'), true, true, false, false);
			_this.resize(_this.drag.find('.resizeTR'), false, true, false, false);
			_this.resize(_this.drag.find('.resizeBR'), false, false, false, false);
			_this.resize(_this.drag.find('.resizeLB'), true, false, false, false);
		},
		// 拖拽移动 /* handle 拖拽手势区 */
		move: function(handle){ 
			var _this = this;
			$(handle).css({'cursor':'move'});
			_this.container.on('mousedown',handle,function (event){			
				var event = event || window.event;				
				var downX = event.clientX - _this.container.offset().left;
				var downY = event.clientY - _this.container.offset().top;							
				document.onmousemove = function (event){
					var event = event || window.event;
					var disL = event.clientX - downX;
					var disT = event.clientY - downY;
					/* 8px 为什么是6+2px 我也不知道 反正就是为了不出现滚动条*/
					var maxL = document.documentElement.clientWidth - _this.container.width()-8;
					var maxT = document.documentElement.clientHeight - _this.container.height()-8;					
					disL <= 0 && (disL = 0);
					disT <= 0 && (disT = 0);
					disL >= maxL && (disL = maxL);
					disT >= maxT && (disT = maxT);
					_this.container.css({
						'left': disL + "px",
						'top': disT + "px"
					});					
					return false
				};			
				document.onmouseup = function (){
					document.onmousemove = null;
					document.onmouseup = null;
					_this.releaseCapture && _this.releaseCapture()
				};
				_this.setCapture && _this.setCapture();
				return false
			});	
		},
		// 移动到指定坐标
		moveto:function(leftX,topY){
			var _this = this;
			_this.container.animate({
				'left': leftX + "px",
				'top': topY + "px"
			});				
		},
		// 最小化函数
		minsize: function(){		
			var _this = this;
			_this.hideFunc();	
			_this.minBackBtn.show();
		},
		// 最大化函数
		maxsize: function(){
			var _this = this;
			_this.container.css({
				'top': '0px',
				'left': '0px',
				'width': document.documentElement.clientWidth-8,
				'height': document.documentElement.clientHeight-8
			})			
			_this.container.find('.max').hide();
			_this.container.find('.revert').show(); 
		},
		// 还原函数
		midsize: function(){
			var _this = this;
			_this.container.css({
				'top': (document.documentElement.clientHeight - _this.options.minHeight) / 2,
				'left': (document.documentElement.clientWidth - _this.options.minWidth) / 2,
				'width': _this.options.minWidth,
				'height':_this.options.minHeight
			});
			_this.container.find('.revert').hide();
			_this.container.find('.max').show();
		},	
		// 显示
		showFunc: function(){
			var _this = this;
			_this.container.show();
			_this.mask.show();
		},
		// 隐藏
		hideFunc: function(){
			var _this = this;
			_this.container.hide();
			_this.mask.hide();
			_this.minBackBtn.hide();
		},
		// resize函数
		resize: function(handle, isLeft, isTop, lockX, lockY){
			var _this = this;
			handle.on('mousedown',function (event){
				var event = event || window.event;			
				var downX = event.clientX;
				var downY = event.clientY;	
				var containerTop = _this.container.offset().top;
				var containerLeft = _this.container.offset().left;
				var containerWidth = _this.container.width();
				var containerHeight = _this.container.height();
				document.onmousemove = function (event){
					var event = event || window.event;
					var disL = event.clientX - downX;
					var disT = event.clientY - downY;
					var maxW = document.documentElement.clientWidth - _this.container.offset().left - 8;
					var maxH = document.documentElement.clientHeight - _this.container.offset().top - 8;			
					var iW = isLeft ? containerWidth - disL : containerWidth + disL;
					var iH = isTop ? containerHeight - disT : containerHeight + disT;
					
					if(iW < _this.options.minWidth){
						iW = _this.options.minWidth
					}
					if(iW > maxW){
						iW = maxW
					}					
					if(iH < _this.options.minHeight){
						iH = _this.options.minHeight
					}
					if(iH > maxH){
						iH = maxH
					}											
					if(!lockX){
						_this.container.width(iW)
					}
					if(!lockY){
						_this.container.height(iH)
					}
					if(isLeft){
						_this.container.css('left', containerLeft + disL)
					}
					if(isTop){
						_this.container.css('top', containerTop + disT)
					}
					
					if(_this.container.offset().top <= 0){
						// 拉动不超过最顶部
						document.onmousemove = null;
						_this.container.css('top','2px')
					}
					if((isLeft && iW < _this.options.minWidth) || (isTop && iH < _this.options.minHeight)){
						document.onmousemove = null;
					}
					return false;	
				};
				document.onmouseup = function (){
					document.onmousemove = null;
					document.onmouseup = null;
				};
				return false;
			})
		}
	}
	return dragPop;
})
