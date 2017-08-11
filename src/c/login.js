define(['jquery', 'juicer','app', 'config','text!../htmls/login.html'], function($, juicer,app, config,login) {
    'use strict';
    return function() {
        $('.my-template').html(login);
        console.log(config)
        console.log(app)
        app.showFooter(false)

        $(document).ready(function() {
            $('.content').html(juicer($('#tpl-login').html(), {}));
            config.show = true;
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