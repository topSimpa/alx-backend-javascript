const response = { status: 200, body: 'Success' };

export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      resolve(response);
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('The fake API is not working currently');
    }
  });
  return promise;
}
