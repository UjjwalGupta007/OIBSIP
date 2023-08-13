document.addEventListener("DOMContentLoaded", function() {
    var converterForm = document.getElementById("converter-form");
    var temperatureInput = document.getElementById("temperatureInput");
    var fromUnitSelect = document.getElementById("fromUnit");
    var toUnitSelect = document.getElementById("toUnit");
    var result = document.getElementById("result");
  
    converterForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var temperature = parseFloat(temperatureInput.value);
      var fromUnit = fromUnitSelect.value;
      var toUnit = toUnitSelect.value;
  
      if (isNaN(temperature)) {
        result.innerHTML = "Please enter a valid number";
        result.style.color = "red";
      } else {
        var convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);
  
        result.innerHTML = `${temperature.toFixed(2)} ${getUnitName(fromUnit)} = ${convertedTemperature.toFixed(2)} ${getUnitName(toUnit)}`;
        result.style.color = "#007bff";
      }
    });
  
    function convertTemperature(temperature, fromUnit, toUnit) {
      if (fromUnit === toUnit) {
        return temperature;
      }
  
      // Convert to Celsius as the intermediate step
      if (fromUnit === "F") {
        temperature = (temperature - 32) * 5 / 9;
      } else if (fromUnit === "K") {
        temperature -= 273.15;
      }
  
      // Convert to the target unit
      if (toUnit === "F") {
        temperature = (temperature * 9 / 5) + 32;
      } else if (toUnit === "K") {
        temperature += 273.15;
      }
  
      return temperature;
    }
  
    function getUnitName(unit) {
      switch (unit) {
        case "C":
          return "Celsius";
        case "F":
          return "Fahrenheit";
        case "K":
          return "Kelvin";
        default:
          return "";
      }
    }
  });
  