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

	it("should have a low energy usage if less than 18 degrees", function(){
		thermostat.temperature = 17;
		expect(thermostat.energyUsage()).toEqual('Low');
	});

	it("should have a medium energy usage if between 18 and 25 degrees", function(){
		thermostat.temperature = 18;
		expect(thermostat.energyUsage()).toEqual('Medium');
		thermostat.temperature = 24;
		expect(thermostat.energyUsage()).toEqual('Medium');
	});

	it("should have a high energy useage if more than 25 degrees", function(){
		thermostat.temperature = 25;
		expect(thermostat.energyUsage()).toEqual('High');
	});

	it("can switch off powersaving mode", function(){
		thermostat.psmToggle();
		expect(thermostat.psm).toBe(false);
	});

	it("can switch on powersaving mode when reset", function(){
		thermostat.psmToggle();
		thermostat.resetTemp();
		expect(thermostat.psm).toBe(true);
	});

}); //closes describe

