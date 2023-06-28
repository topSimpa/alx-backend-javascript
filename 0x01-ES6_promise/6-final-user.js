import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise = Promise.all(signUpUser(firstName, lastName), uploadPhoto(fileName));
  return promise.finally((data) => [{
    status: data.status,
    value: data.value,
  }]);
}
