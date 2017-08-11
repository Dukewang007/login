define(['jquery', 'juicer', 'mock', 'text!../index.html'], function($, juicer, Mock,index) {
    'use strict';
    return function(args){
      
      $('.content').html()
      console.log(args);
      var arr3 = [5,25,35,45];
      var qwe = 25;
      var wsx = 35;
     
      for(var i= 0;i<arr3.length;i++){
        if(qwe == arr3[i]){
          arr3.push("ddddd");
        }
        if(wsx = arr3[i]){
          // arr3.push("dddppp"); 
          
        }
      }
      
    }
         
});