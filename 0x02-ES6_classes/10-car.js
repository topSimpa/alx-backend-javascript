/* eslint-disable no-underscore-dangle */
export default class Class {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return (this);
  }
}
