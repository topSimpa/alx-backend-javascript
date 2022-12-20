export default function concatArrays(array1, array2, string) {
  array1.push(...array2);
  array1.push(...string);
  return array1
}
