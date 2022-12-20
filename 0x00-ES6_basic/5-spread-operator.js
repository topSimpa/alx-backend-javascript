export default function concatArrays(array1, array2, string) {
  array1.push(...array2);
  array2.push(...string);
}
