import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let str = '';
  const photo = uploadPhoto();
  return photo.then((foto) => createUser()
    .then((user) => {
      str += `${foto.body} ${user.firstName} ${user.lastName}`;
      console.log(str);
    }))
    .catch(() => console.log('Signup system offline'));
}
