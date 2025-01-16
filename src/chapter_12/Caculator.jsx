import React, { useState } from "react";

import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const Calculator = (props) => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };

  const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);

    console.log(input);
    if (Number.isNaN(input)) {
      return "";
    }
    return convert(input);
  };

  const toFahrenheit = (temp) => {
    return ((temp - 32) * 5) / 9;
  };
  const toCelsius = (temp) => {
    return (temp * 9) / 5 + 32;
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toFahrenheit) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toCelsius) : temperature;
  return (
    <div>
      <TemperatureInput
        temperature={celsius}
        scale="c"
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        temperature={fahrenheit}
        scale="f"
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict temperature={parseFloat(celsius)} scale={scale} />
    </div>
  );
};

export default Calculator;
