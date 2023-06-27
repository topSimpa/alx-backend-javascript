export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const name of reportWithIterator) {
	str += name;
	if (!(reportWithIterator.next().done) {
		str += ' | ';
        }
    }
    return str;
}
