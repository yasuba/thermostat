$(document).ready(function(){

	var t = new Thermostat();

	$('#up').on('click', function(){
		$('#temp').replaceWith('<p id="temp">' + t.increaseTemp() + '&deg;C</p>');
		tempColours();
	});

	$('#down').on('click', function(){
		$('#temp').replaceWith('<p id="temp">' + t.decreaseTemp() + '&deg;C</p>');
		tempColours();
	});

	function tempColours() {
		if(t.energyUsage() === 'High') $('#temp').css('color', 'red');
		else if(t.energyUsage() === 'Medium') $('#temp').css('color', 'orange');
		else $('#temp').css('color', 'green');
	};

	$("#psm").on('click', function(){
  	if($(this).hasClass('fa-check-square-o')){
  		$(this).removeClass('fa-check-square-o').addClass('fa-square-o');}
  	else {
  		$(this).removeClass('fa-square-o').addClass('fa-check-square-o');}
  });

  $("#psm").on('click', savingOff);

	function savingOff() {
	    t.psmToggle();
	    $('#psm').html("Switch on PowerSaving Mode");
	    $("#psm").off('click').on('click', savingOn)
	};

	function savingOn() {
	    t.psmToggle();
	    $('#psm').html("Switch off PowerSaving Mode");
	    $("#psm").off('click').on('click', savingOff)
	};

	$('#reset').on('click', function(){
		t.resetTemp();
		$('#temp').replaceWith('<p id="temp">' + t.temperature + '&deg;C</p>');
	  $('#psm').prop('checked', true);
	});

});


