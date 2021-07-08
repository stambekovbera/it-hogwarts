 
    
$(document).ready(function(){
	$(".dws__form").on("click", ".raittab", function(){
		$(".dws__form .dws__row .raittab").removeClass("activetab")
		$(".dws__form .dws__column").removeClass("active")


		$(this).addClass("activetab");
		$(".dws__column").eq($(this).index()).addClass("active");


	});
});

$(document).ready(function(){
	$(".dws__form").on("click",".raittabtwo",function(){
		$(".dws__form .dws__rowtwo .raittabtwo").removeAttr("id","activetabtwo")
		$(".dws__form .dws__column .block__raitingtwo").removeClass("active")


		$(this).attr("id","activetabtwo");
		$(".block__raitingtwo").eq($(this).index()).addClass("active")
	})
})
