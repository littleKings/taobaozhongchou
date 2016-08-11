$(".banner").banner({
	setting : [
		{
			imageUrl:"./img/1.jpg"
		},
		{
			imageUrl:"./img/2.jpg"
		},
		{
			imageUrl:"./img/3.jpg"
		},
		{
			imageUrl:"./img/4.jpg"
		},
		{
			imageUrl:"./img/5.jpg"
		},
	],
	type : "slide",
	indicator : 2 ,	
});
//下拉框
$("ul.left li").eq(1).mouseover(function(){
	$(this).find(".select").slideDown();
 }).mouseout(function(){
	$(this).find(".select").slideUp();
})
$("ul.right li").eq(1).mouseover(function(){
	$(this).find(".select").slideDown();
 }).mouseout(function(){
	$(this).find(".select").slideUp();
})

//六层
// $.ajax({
// 	url : "http://www.ikindness.cn/api/test/getFund",
// 	data : {//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
// 		// type : 1//与楼层大类同序
// 	}
// }).done(function(data){
// 	var _data = data.data;
// 	for(var i = 0, dataLen = _data.length; i < dataLen; i++){
// 		var $img = _data[i].image,
// 			$name = _data[i].name,
// 			$label = _data[i].label,
// 			$rate = _data[i].rate,
// 			$sum = _data[i].sum,
// 			$amount = _data[i].amount,
// 			$main =$(".list .content .main").eq(i);
// 		$main.prepend("<div class=\"nav\"><img class=\"pic\" src=\""+$img+"\"></div>");
// 		if (i % 8 !=0){
// 			$main.append("<div class=\"current\"><span style=\"font-size:15px;\">"+$name+"</span></div>");
// 			$main.append("<div class=\"test\"></div>");
// 			for (var j=0;j< $label.length;j++){
// 				$main.find(".test").append("<label>"+$label[j]+"</label>");
// 			}
// 			$main.append("<div class=\"bar\" style=\"border-right-width:"+(250*(0.01*(100-($rate <= 100 ? $rate : 100))))+"px\"></div>");//右边框
// 			$main.append("<div  class=\"project\"><span class=\"spLeft\"><em class=\"num\">"+$rate+"%</em><em class=\"name\">达成率</em></span><span class=\"spMiddle\"><em class=\"num\">"+$sum+"</em><em class=\"name\">已筹金额</em></span><span class=\"spRight\"><em class=\"num\">"+$amount+"%</em><em class=\"name\">支持人数</em></span></div>");
// 		}
// 	}
// });
$.ajax({
	type : "get",
	url:"http://www.ikindness.cn/api/test/getFund",
	success : function(data){
		var data = data.data;
		for (var i = 0, dataLen = data.length; i < dataLen; i++) {
			$(".content .main").eq(i).html(template("tmpl",{
				data :data,
				i :i
			}));
		}
	}
});


