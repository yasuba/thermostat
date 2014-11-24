#Thermostat

The challenge is to create a simple interface for a digital thermostat, using JavaScript.

##Specifications

* Thermostat starts at 20 degrees
* You can increase the temp with the up button
* You can decrease the temp with the down button
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 by hitting the reset button
* The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
* After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature

##Technologies

* Javascript
* JQuery
* Jasmine SpecRunner
* 
##View the thermostat

     git clone git@github.com:yasuba/thermostat.git
     
     cd thermostat
     
     open thermostat.html

Click the up and down arrows to change the temperature. Uncheck powersaving mode to reach higher temperatures and click reset to return to 20 degrees with powersaving mode on.

To run the Jasmine tests, from the thermostat directory:
     
     open SpecRunner.html
