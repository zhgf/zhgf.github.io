/*
 *  根据设备尺寸调整html的跟字体大小，实现通过rem的移动端布局适配
 *  
 *  event：自动监听旋转和resize
 *  devicePixelRatio: 页面缩放比
 *  baseWidth：页面html上设置data-basewidth,设计稿为基准页面宽度, 默认为640px
 */ 

(function(win,doc){

    var timer = null,
        html = doc.documentElement,
        baseWidth = html.dataset.basewidth*1 || 640,
        metaEl = document.querySelector('meta[name="viewport"]'),
        event = 'onorientationchange' in win ? 'onorientationchange' : 'resize';

    // 添加页面缩放比和禁止缩放
    if(!metaEl){
        metaEl = document.createElement('meta');
        metaEl.setAttribute('name','viewport');
        metaEl.setAttribute('content','initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0');
        html.firstElementChild.appendChild(metaEl);
    }

    // 设置html跟字体大小，设备像素比dpr
    function layoutCalc(){

        var width = html.getBoundingClientRect().width,
            ratio = width / baseWidth * 100,
            devicePixelRatio = window.devicePixelRatio,
            rem = ratio < 100 ?  ratio < 42.5 ? 42.5 : ratio : 100;
            // 320/750 = 42.6666
        if(!/\.\d+/.test(devicePixelRatio.toString())){
            html.dataset.dpr = devicePixelRatio;
        }

        html.style.fontSize = rem + 'px';

    }
    // 页面尺寸改变时触发
    win.addEventListener(event,function(){
        clearTimeout(timer);
        timer = setTimeout(layoutCalc,300);
    },false);
    // 用户每次浏览网页时触发
    win.addEventListener('pageShow',function(e){
        if(e.persisted){
            clearTimeout(timer);
            timer = setTimeout(layoutCalc,300);
        }
    },false);
    // 页面加载时触发
    layoutCalc();

}(window,document));