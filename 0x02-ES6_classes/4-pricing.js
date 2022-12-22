/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.currency = currency;
    this.amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw TypeError('Currency must be a currency');
    }
    this._currency = val;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw TypeError('amount must be a number');
    }
    this._amount = val;
  }

  displayFullPrice() {
    return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
