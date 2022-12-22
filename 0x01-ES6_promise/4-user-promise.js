export default function signUpUser(firstName, lastName) {
  const sucess = true;
  const promise = new Promise((resolve, reject) => {
    if (sucess) {
      resolve({
        firstName,
        lastName,
      });
    } else {
      reject();
    }
  });
  return promise;
}
