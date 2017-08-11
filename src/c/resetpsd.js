define(['jquery', 'juicer','app', 'text!../htmls/resetpsd.html'], function($, juicer,app, resetpsd) {
    'use strict';
    return function() {
        $('.my-template').html(resetpsd);
        
        $(document).ready(function() {
            $('.content').html(juicer($('#tpl-resetpsd').html(), {}));
            
            $(".login-bg").css({
            	"height":$(".login-bg").width()*2/3
            })
            $(".login-in").click(function(){
            	var mobile,psd;
            	var postdata= {};
            	if($("#mobile").val() == ""){
            		app.showAlertinfo("请输入手机号")
            		return;
            	}
            	if(!app.mobileTest($("#mobile").val())){
            		app.showAlertinfo("请输入正确的手机号")
            		return;
            	}	
            	if($("#psd").val() == ""){
            		app.showAlertinfo("请输入密码")
            		return;
            	}
            	postdata.mobile = $("#mobile").val();
            	postdata.psd = $("#psd").val();
            	console.log(postdata)
            })
        })

    }

});