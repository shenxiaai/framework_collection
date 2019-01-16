				var myScroll;
			var pullDownFlag,pullUpFlag;
			var pullDown,pullUp;
			function positionJudge(){
			    if(this.y>40){    //判断下拉

			    	if(pullDown.children[0].className=='Load'){
			    		return false;
			    	}else{
			        	pullDown.innerHTML = '<img class="Load" src="images/load.png"/>'+"加载中...";
			    	}
			    	
			        pullDownFlag = 1;
			    }else if(this.y<(this.maxScrollY-40)){   //判断上拉
			        if(pullUp.children[0].className=='Load'){
			    		return false;
			    	}else{
			        	pullUp.innerHTML = '<img class="Load" src="images/load.png"/>'+"加载中...";
			    	}
			        pullUpFlag = 1;
			    }
			}
			function action(){
			    if(pullDownFlag==1){
			        pullDownAction();
			        pullDown.innerHTML ='<img class="ArrowDown" src="images/Arrow.png"/>'+"下拉即可刷新…";
			        pullDownFlag = 0;
			    }else if(pullUpFlag==1){
			        pullUpAction();
			        pullUp.innerHTML ='<img class="ArrowUp" src="images/Arrow.png"/>'+"上拉加载更多…";
			        pullUpFlag = 0;
			    }
			}
			function loaded(){
			    pullDownFlag = 0;
			    pullUpFlag = 0;
			    pullDown = document.getElementById("pullDown");
			    pullUp = document.getElementById("pullUp");
			    myScroll = new IScroll("#wrapper",{
			        probeType: 3,
//			        momentum: false,//关闭惯性滑动
			        mouseWheel: true,//鼠标滑轮开启
			        scrollbars: true,//滚动条可见
			        fadeScrollbars: true,//滚动条渐隐
			        interactiveScrollbars: true,//滚动条可拖动
			        shrinkScrollbars: 'scale', // 当滚动边界之外的滚动条是由少量的收缩
			        useTransform: true,//CSS转化
			        useTransition: true,//CSS过渡
			        bounce: true,//反弹
			        freeScroll: false,//只能在一个方向上滑动
			        startX: 0,
			        startY: 0,
//			        snap: "li",//以 li 为单位
			    });
			    myScroll.on('scroll',positionJudge);
			    myScroll.on("scrollEnd",action);
			}
			function pullDownAction(){
			    setTimeout(function(){
			        var ul = document.getElementById("list");
			        var lis = ul.getElementsByTagName("li");
			        for(var i=0;i<lis.length;i++){
			            lis[i].innerHTML = "下拉刷新";
			        }
			        myScroll.refresh();
			    },1000);
			}
			function pullUpAction(){
			    setTimeout(function(){
			        var ul = document.getElementById("list");
			        var lis = ul.getElementsByTagName("li");
			        for(var i=0;i<lis.length;i++){
			            lis[i].innerHTML = "上拉刷新";
			        }
			        myScroll.refresh();
			    },1000);
			}
			function updatePosition(){
				pullDown.innerHTML = this.y>>0;
			}
			//是iScroll的初始化
			document.addEventListener('touchmove', function (e) {
			    e.preventDefault();
			}, false);