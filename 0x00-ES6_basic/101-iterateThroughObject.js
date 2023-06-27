export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  const iter = reportWithIterator[Symbol.iterator]();
  iter.next();
  for (const name of reportWithIterator) {
    str += name;
    if (!(iter.next().done)) {
      str += ' | ';
    }
  }
  return str;
}
