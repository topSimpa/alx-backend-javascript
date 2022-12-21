export default function appendToEachArrayValue(array, appendString) {
  const ar = array;
  for (const val of array) {
    ar[array.indexOf(val)] = appendString + val;
  }

  return ar;
}
