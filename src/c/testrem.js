define(['jquery', 'juicer','app', 'text!../htmls/testrem.html'], function($, juicer,app, testrem) {
    'use strict';
    return function() {
        $('.my-template').html(testrem);
        
        $(document).ready(function() {
            $('.content').html(juicer($('#tpl-rem').html(), {}));
            
            
            
            $(".file").on("change","input[type='file']",function(){
               
                var filePath=$(this).val();
                
                if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
                    $(this).next(".fileerrorTip").html("").hide();
                    var arr=filePath.split('\\');
                    var fileName=arr[arr.length-1];
                    $(this).prev(".showFileName").html(fileName);
                }else{

                    $(this).prev(".showFileName").html("").hide();
                    $(this).next(".fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();
                    return false 
                }
            })
        })

    }

});