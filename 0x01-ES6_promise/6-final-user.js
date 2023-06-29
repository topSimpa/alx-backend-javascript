import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .finally((stats) => stats.map(
      (promise) => ({
        status: promise.status,
        value: (promise.value === 'fulfilled' ? promise.value : promise.reason),
      }),
    ));
}
