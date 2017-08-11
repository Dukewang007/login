define(['jquery'],function($){


	var asydata = {
		"height":400,
		"show":false
	}
	if(asydata.show){
		$(".content").css("height",asydata.height)
	}
	
	return asydata;
})