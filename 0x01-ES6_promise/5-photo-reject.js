export default function uploadPhoto(filename) {
  const success = false;
  const promise = new Promise((resolve, reject) => {
    if (!success) {
      reject(new Error(`${filename} cannot be processed`));
    } else {
      resolve();
    }
  });
  return promise;
}
