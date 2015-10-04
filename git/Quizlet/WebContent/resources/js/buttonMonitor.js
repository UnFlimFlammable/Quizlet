var getPressedButtons = function(){
	$.GET("pollPressedButtons", function(data){
		alert(data)
	});
}

var onAppStartup = function(){
	while(true){
		sleep(200);
		
		getPressedButtons();
	}
}

alert("Hello");