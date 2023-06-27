import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let str = '';
  const photo = uploadPhoto();
  photo.then((photo) => createUser()
    .then((user) => {
      str += `${photo.body} ${user.firstName} ${user.lastName}`;
      console.log(str);
    }))
    .catch(() => console.log('Signup system offline'));
}
