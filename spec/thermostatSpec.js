describe("Thermostat", function(){
	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	it("should start at 20 degrees", function(){
		expect(thermostat.temperature).toEqual(20);
	});

	it("can increase the temperature", function(){
		thermostat.increaseTemp();
		expect(thermostat.temperature).toEqual(21);		
	});

	it("can decrease the temperature", function(){
		thermostat.decreaseTemp();
		expect(thermostat.temperature).toEqual(19);
	});

	it("has a minimum temp of 10 degrees", function(){
		thermostat.temperature = 10;
		thermostat.decreaseTemp();
		expect(thermostat.temperature).toEqual(10);
	});

	it("has a powersaving mode that is on by default", function(){
		expect(thermostat.psm).toBe(true);
	});

	it("has a max temp of 25 when in psm", function(){
		thermostat.psm = true;
		expect(thermostat.maxTemp()).toEqual(25);
	});

	it("has a max temp of 32 when not in psm", function(){
		thermostat.psm = false;
		thermostat.temperature = 32;
		thermostat.increaseTemp();
		expect(thermostat.maxTemp()).toEqual(32);
	});

	it("can reset the temperature", function(){
		thermostat.temperature = 25;
		thermostat.resetTemp();
		expect(thermostat.temperature).toEqual(20);
	});

	

}); //closes describe


// Thermostat starts at 20 degrees
// You can increase the temp with the up button
// You can decrease the temp with the down button
// The minimum temperature is 10 degrees
// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default
// You can reset the temperature to 20 by hitting the reset button
// The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
// After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature