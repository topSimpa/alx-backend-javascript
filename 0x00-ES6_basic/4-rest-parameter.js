export default function returnHowManyArguments(...param) {
  let count = 0;
  for (i in param) {
    count++;
  }
  return count;
}
