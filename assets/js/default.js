$(function(){
	$.fn.getHexBackgroundColor = function() {
		var rgb = $(this).css('background-color');
		if (rgb.search("rgb") == -1) {
			return ""+rgb;
		}else{
			rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2);}
			return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}
	}
	
	$("#color-picker").farbtastic("#color-value");
	output_colorvalue();
	
	$("#color-btn").click(function(){
		base_color = $("#color-value").val();
		lessVars = {
		  '@base-color':base_color
		};
		less.modifyVars(lessVars);
		output_colorvalue();
	});
	
	$(".color-ref span").click(function(){
		var cv = $(this).attr("color");
		$("#color-value").val(cv);
		$.farbtastic("#color-picker").setColor(cv);
		$("#color-btn").trigger("click");
	});
	
	function output_colorvalue() {
		$(".figure .scheme.complementary li").each(function(i){
			color_value = $(this).getHexBackgroundColor();
			$(this).parents(".figure").find(".figlegend span").eq(i).html(color_value);
			$(this).parents(".figure").find(".figlegend span").eq(i).css("background-color",color_value);
		});
		$(".figure .scheme.analgous li").each(function(i){
			color_value = $(this).getHexBackgroundColor();
			$(this).parents(".figure").find(".figlegend span").eq(i).html(color_value);
			$(this).parents(".figure").find(".figlegend span").eq(i).css("background-color",color_value);
		});
		$(".figure .scheme.split-comp li").each(function(i){
			color_value = $(this).getHexBackgroundColor();
			$(this).parents(".figure").find(".figlegend span").eq(i).html(color_value);
			$(this).parents(".figure").find(".figlegend span").eq(i).css("background-color",color_value);
		});
		$(".figure .scheme.triadic li").each(function(i){
			color_value = $(this).getHexBackgroundColor();
			$(this).parents(".figure").find(".figlegend span").eq(i).html(color_value);
			$(this).parents(".figure").find(".figlegend span").eq(i).css("background-color",color_value);
		});
		$(".figure .scheme.tetradic li").each(function(i){
			color_value = $(this).getHexBackgroundColor();
			$(this).parents(".figure").find(".figlegend span").eq(i).html(color_value);
			$(this).parents(".figure").find(".figlegend span").eq(i).css("background-color",color_value);
		});
		$(".figure .scheme.shades li").each(function(i){
			color_value = $(this).getHexBackgroundColor();
			$(this).parents(".figure").find(".figlegend span").eq(i).html(color_value);
			$(this).parents(".figure").find(".figlegend span").eq(i).css("background-color",color_value);
		});
		$(".figure .scheme.clash li").each(function(i){
			color_value = $(this).getHexBackgroundColor();
			$(this).parents(".figure").find(".figlegend span").eq(i).html(color_value);
			$(this).parents(".figure").find(".figlegend span").eq(i).css("background-color",color_value);
		});
		$(".figure .scheme.five-tone li").each(function(i){
			color_value = $(this).getHexBackgroundColor();
			$(this).parents(".figure").find(".figlegend span").eq(i).html(color_value);
			$(this).parents(".figure").find(".figlegend span").eq(i).css("background-color",color_value);
		});
		$(".figure .scheme.five-tone li").each(function(i){
			color_value = $(this).getHexBackgroundColor();
			$(this).parents(".figure").find(".figlegend span").eq(i).html(color_value);
			$(this).parents(".figure").find(".figlegend span").eq(i).css("background-color",color_value);
		});
		$(".figure .scheme.six-tone li").each(function(i){
			color_value = $(this).getHexBackgroundColor();
			$(this).parents(".figure").find(".figlegend span").eq(i).html(color_value);
			$(this).parents(".figure").find(".figlegend span").eq(i).css("background-color",color_value);
		});
	}
});

