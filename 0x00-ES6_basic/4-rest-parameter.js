export default function returnHowManyArguments (...param) {
  let count = 0;
  let i;
  for (i in param) {
    count++;
  }
  return count;
}
