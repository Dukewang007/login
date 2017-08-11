define(['jquery'],function($){
	
	//获取url中的参数 
	function getRequest(str){
		var url = window.location;
		var prams = {};
		if(url.indexOf("?")==-1)return;
		var arr =url.substr(url.indexOf("?")+1).split("&");
		arr.forEach(function(i,item){
			prams[arr[item].split("=")[0]] = arr[item].split("=")[1];
		})
		return prams[str]
			
	}
	

	//简单提示文字信息
	function showAlertinfo(title){
		$(".content").append("<div class='mask-white'><div class='mask-content'><span class='mask-text'>"+title+"</span></div></div>");
		setTimeout(function(){
			$(".mask-white").remove()
		},800)
		
	}

	//正则匹配手机号
	function mobileTest(str){
		var mobile_reg = /^1[3|4|5|7|8]\d{9}$/;
		return mobile_reg.test(str)
	}

	//显示footer还是展示footer
	function showFooter(bol){
		console.log(screen.height)
		if(bol){
			$(".footer").show()
		}else {
			$(".footer").hide()
		}
	}
	
	return {
		getRequest : getRequest,
		showAlertinfo: showAlertinfo,
		mobileTest : mobileTest,
		showFooter : showFooter
	}

})

