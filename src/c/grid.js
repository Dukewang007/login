define(['jquery', 'juicer', 'mock', 'text!../htmls/grid.html'], function($, juicer, Mock, grid) {
    'use strict';
    return function() {
        $('.my-template').html(grid);

        $(document).ready(function() {
            //生成随机数据
            var Random = Mock.Random;
            var data = Mock.mock({
                'list|1-5': [{
                    'id|+2': 1,
                    'pid': '@EMAIL',
                    'listprice': '@cname',
                    'unitcost': Random.integer(60, 100),
                    'attr1': '@color',
                    'status': Random.region()
                }],

            });
            var basicdata = Mock.mock({
                'list|1-5': [{
                    
                    'email': '@EMAIL',
                    'firstname': '@cname',
                    'unitcost': Random.integer(60, 100),
                    'lastname': '@color',
                    'phone': Random.region()
                }],

            });
            var product = data.list;
            var userinfo = basicdata.list;
            console.log(JSON.stringify(data))
       
            $('.content').html(juicer($('#tpl-rem').html(), userinfo));

            console.log($('#dg').attr("dataa"))
            // 创建组合框
            $('#cc').combobox({
                url: '',
                required: true,
                valueField: 'id',
                textField: 'text'
            });

            // 创建基础数据表格
            $('#dg1').datagrid({
                // url: 'datagrid_data1.json',
                //data: [
								// 	{id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
								// 	{id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
								// 	{id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
								// 	{id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
								// 	{id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
								// 	{id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
								// 	{id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
									
								// ],
								data:product,
                columns:[[
								    {field:'id',title:'Item ID',rowspan:2,width:80,sortable:true},
								    {field:'pid',title:'Product ID',rowspan:2,width:80,sortable:true},
								    {title:'Item Details',colspan:4}
								],[
								    {field:'listprice',title:'List Price',width:80,align:'right',sortable:true},
								    {field:'unitcost',title:'Unit Cost',width:80,align:'right',sortable:true},
								    {field:'attr1',title:'Attribute',width:100},
								    {field:'status',title:'Status',width:60}
								]],
								toolbar: [{
									iconCls: 'icon-edit',
									handler: function(){alert('edit')}
								},'-',{
									iconCls: 'icon-help',
									handler: function(){alert('help')}
								}],
								
            });

            // 创建基础数据表格
            $('#dg2').datagrid({
                // url: 'datagrid_data1.json',
                //data: [
                //  {id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
                //  {id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
                //  {id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
                //  {id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
                //  {id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
                //  {id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
                //  {id:'value11', pid:'value12',listprice:'$2.58',unitcost:'syc',attr1:'zhongguo',status:'true'},
                  
                // ],
                data:userinfo,
                columns:[[
                    {field:'firstname',title:'Item ID',width:80,sortable:true},
                    {field:'lastname',title:'Product ID',width:80,sortable:true},
                    {field:'phone',title:'List Price',width:80,align:'right',sortable:true},
                    {field:'email',title:'Unit Cost',width:80,align:'right',sortable:true},
                   
                ]],
                toolbar: '#toolbar'
                
            });
        })

    }

});
