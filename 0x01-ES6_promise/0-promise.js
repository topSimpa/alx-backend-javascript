export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const sucess = true;
    if (sucess) {
      resolve();
    } else {
      reject();
    }
  });
  return promise;
}
