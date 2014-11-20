function Thermostat() {
  this.resetTemp();
}

  Thermostat.prototype.increaseTemp = function() {
    if(this.psm === false && this.temperature < 32) return this.temperature += 1;
    else if(this.temperature < 25) return this.temperature +=1;
    return this.maxTemp();
  };

  Thermostat.prototype.decreaseTemp = function() {
    if(this.temperature >= 11) return this.temperature -= 1;
    else return this.temperature = 10;
  };

  Thermostat.prototype.maxTemp = function(){
  	if(this.psm) return 25;
  	else return 32;
  };

  Thermostat.prototype.resetTemp = function(){
    this.psm = true;
    return this.temperature = 20;
  };

  Thermostat.prototype.energyUsage = function(){
    if(this.temperature < 18) return 'Low';
    if(this.temperature < 25) return 'Medium';
    if(this.temperature >= 25) return 'High';
  };

  Thermostat.prototype.psmToggle = function(){
    if(this.psm === true) this.psm = false;
    else this.psm = true;
  };

