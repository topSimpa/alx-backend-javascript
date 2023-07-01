import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const prom = await Promise.all([uploadPhoto(), createUser()])
    .then(
      (res) => ({ photo: res[0], user: res[1] }),
      () => ({ photo: null, user: null }),
    );
  return prom;
}
