define(['jquery','app','juicer','text!../htmls/qdtest.html'], function ($, app,juicer,qdtest) {
    // 'use strict';
    return function () {
      $('.my-template').html(qdtest);
      $(document).ready(function(){
        
        $.ajax({
          type: "GET",
          url: "qdtest.json",
          dataType: "json",
          success:function(data){
           
            $('.content').html(juicer($('#tpl-qdtest').html(),data));
            function cat(){

            };
            cat.prototype={ 
                food:"fish",
                say: function(){   
                  console.log("I love "+this.food);
                }
            }
            var blackCat = new cat;
            blackCat.say();
            var whiteDog = {food:"bone"};

            blackCat.say.call(whiteDog);

            console.log(document.getElementsByTagName("ul"))
            var domNodes =  Array.prototype.slice.call(document.getElementsByTagName("ul"));
            
            console.log(domNodes);
             function test(a,b,c,d) 
             { 
                var arg = Array.prototype.slice.call(arguments,2); 
                console.log(arg); 
             } 
             test("a","b","c","d"); //b,c,d

             var strict = (function(){
              return !this;
             }());
             console.log(strict)

             // 修改函数体
            var func = function() {
                console.log(this);
            };
            var o = {};
            o.fn = func;
            
            // alert(o.fn === func);
        
            func();
            o.fn();


            // var func1 = function() {
            //     this.name = "程序员";
            // };
            // func1.apply(null);//等同于func1();
            // alert(window.name);
            console.log(window)

            // // 一个数组的例子
            // var arr1 = [1,2,3,[4,5],[6,7,8]];
            // // 将其展开
            // var arr2 = arr1.conact.apply([],arr1);
            // console.log(arr2)


           
            

          }



        });
        
        // 定义方法
        var func = function(name, age, sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        };
        // 创建对象
        var o = {};
        // 给对象添加成员
        // apply 模式
        var p1 = func.apply(o, ["赵晓虎", 19, "男"]);
        // call 模式
        var p2 = func.call(o, "赵晓虎", 19, "男");

        console.log(o)  
        var scope = "global scope";
        function checkscope(){
          
          var scope = "local scope";
          function nested(){
            var scope = "nested scope";
            return scope;
            console.log(scope)
          }
          return nested;
        }
        checkscope()
         

        function Emp(ename,salary){
          this.ename =ename;
          this.salary = salary;
          this.toString = function(){
            return this.ename+":"+this.salary;
          }
        }
        var emp1 = new Emp("mary",3500)
        var emp2 = new Emp("tom",4900);
        Emp.prototype.hireDate = "2015/05/01";
        delete emp1.ename;
        // delete Emp.prototype.hireDate;
        console.log(emp1.toString()+":"+emp1.hireDate);
        console.log(emp2.toString()+":"+emp1.hireDate);


        function A(){
          this.name = "a";
          this.toString = function (){
            return this.name;
          }
        }
        function B(){
          this.name = "b";
        }
        var b1 = new B();
        var a1 = new A();
        console.log(a1.toString())
        console.log(b1.toString())

        // var b2 = new B();
        B.prototype = new A();
        var b2 = new B();
        console.log(b2.toString())
      })
      var info = 'tom';
          function foo(){
              //this指向window 
              var info = 'jerry';
             console.log(this);  //tom
             console.log(info)
              console.log(this===window)   //true
          }
          foo(); 
          // foo.call();
          // foo.apply();

    }
         
});