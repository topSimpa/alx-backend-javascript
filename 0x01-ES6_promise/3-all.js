import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let str = '';
  const photo = uploadPhoto();
  photo.then((r) => createUser()
    .then((p) => {
      str += `${r.body} ${p.firstName} ${p.lastName}`;
    }))
    .then(() => console.log(str))
    .catch(() => console.log('Signup system offline'));
}
