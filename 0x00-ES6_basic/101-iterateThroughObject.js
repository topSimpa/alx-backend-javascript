export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  const iter = reportWithIterator[Symbol.iterator]();
  for (const name of reportWithIterator) {
    str += name;
    if (!iter.next().done) {
      str += ' | ';
    }
    iter.next();
  }
  return str;
}
