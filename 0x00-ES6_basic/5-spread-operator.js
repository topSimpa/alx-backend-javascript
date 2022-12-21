export default function concatArrays(array1, array2, string) {
  const array = [];
  array.push(...array1);
  array.push(...array2);
  array.push(...string);
  return array;
}
