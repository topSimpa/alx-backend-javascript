export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  let val;
  const ar = array;
  for (val of array.entries) {
    ar[idx] = appendString + val;
    idx += 1;
  }

  return ar;
}
