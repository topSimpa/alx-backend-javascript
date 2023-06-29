import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
// eslint-disable-next-line
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((stats) => stats.map(
        (promise) => ({ status: promise.status, value: promise.value ?? promise.reason })));
}
console.log(null ?? "nice");