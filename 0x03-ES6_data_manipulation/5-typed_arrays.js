/**
 * createInt8TypedArray -  that returns a new ArrayBuffer with an Int8 value at a specific position.
 *
 * @param - {number} length
 * @param - {number} position
 * @param - {number} value
 * @returns - {typearray}
 */

export default function (length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);

  if (position >= length) {
    throw new Error('Position outside range');
  }
  int8view[position] = value;
  return (new DataView(buffer, 0, length));
}
