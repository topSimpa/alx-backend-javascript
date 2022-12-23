/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // eslint-disable-next-line consistent-return
  [Symbol.toPrimitive](type) {
    if (type === 'string') {
      return (this._location);
    } if (type === 'number') {
      return (this._size);
    }
  }
}
