$(document).ready(function() {
	$('.ce-countdown').countEverest({
		// Set your target date here!
		day: 28,
		month: 5,
		year: 2020,
		leftHandZeros: false,
		onChange: function() {
			drawCircle($('#ce-days').get(0), this.days, 365);
			drawCircle($('#ce-hours').get(0), this.hours, 24);
			drawCircle($('#ce-minutes').get(0), this.minutes, 60);
			// drawCircle($('#ce-seconds').get(0), this.seconds, 60);
		}
	});

	function deg(v) {
		return (Math.PI/180) * v - (Math.PI/2);
	}

	function drawCircle(canvas, value, max) {
		var	primaryColor = '#ffffff',
			secondaryColor = '#74d2fe',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 4;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}
});