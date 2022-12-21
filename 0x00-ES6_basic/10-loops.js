export default function appendToEachArrayValue(array, appendString) {
  let idx;
  let val;
  const ar = array;
  for ([idx, val] of array.entries()) {
    console.log(idx, val);
    ar[idx] = appendString + val;
  }

  return ar;
}
