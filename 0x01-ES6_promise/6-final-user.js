import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const prom = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return prom.map(
    (promise) => ({
      status: promise.status,
      value: (promise.status === 'fulfilled' ? promise.value : promise.reason),
    }),
  );
}
