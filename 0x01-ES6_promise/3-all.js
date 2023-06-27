import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let str = '';
  const photo = uploadPhoto();
  photo.then((r) => {
    str += `${r.body} `;
  })
    .catch(() => console.log('Signup system offline'));
  const profile = createUser();
  profile.then((r) => {
    str += `${r.firstName} ${r.lastName}`;
    console.log(str);
  })
    .catch(() => console.log('Signup system offline'));
}
