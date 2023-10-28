class Thermostat {
  constructor(fahrenheit) {
    this._kelvin = (5 / 9) * (fahrenheit - 32) + 273.15;
  }
  
  get temperature() {
    return this._kelvin - 273.15;
  }
  
  set temperature(celsius) {
    return this._kelvin = celsius + 273.15;
  }
}
