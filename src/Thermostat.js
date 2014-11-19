function Thermostat() {
  this.temperature = 20;
  this.psm = true;
}

  Thermostat.prototype.increaseTemp = function() {
    if(this.psm === false && this.temperature < 32) return this.temperature += 1;
    else if(this.temperature < 25) return this.temperature +=1;
    return this.maxTemp();
  };

  Thermostat.prototype.decreaseTemp = function() {
    if(this.temperature >= 11) this.temperature -= 1;
    else this.temperature = 10;
  };

  Thermostat.prototype.maxTemp = function(){
  	if(this.psm) return 25;
  	else return 32;
  };

  Thermostat.prototype.resetTemp = function(){
    return this.temperature = 20;
  };

