$( document ).ready(function(){

	// method buat bikin stop watch

	setInterval(countUp, 100);

	function countUp(){
		var timer = $('#timer').find('.stopwatch');

		var countSecond = parseInt(timer.attr("value"), 10);
		countSecond = countSecond+1;

		console.log(countSecond + " second");

		var hour = Math.floor(countSecond/3600);
		var minutes = Math.floor((countSecond/60) % 60);
		var seconds = countSecond % 60;

		if(seconds < 10){
			seconds = "0"+seconds;
		}

		if(hour < 10){
			hour = "0"+hour;
		}

		if(minutes < 10){
			minutes = "0"+minutes;
		}

		var totalTime = hour + ":" + minutes + ":" + seconds;

		timer.attr("value", countSecond+"");

		$('#timer').find('.value').text(totalTime);
		$('#timer').find('.stopwatch').text(totalTime);

	}
});