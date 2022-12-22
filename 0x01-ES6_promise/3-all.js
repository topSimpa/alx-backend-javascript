import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let str = '';
  const photo = uploadPhoto();
  photo.then((r) => {
    str += `${r.body} `;
  });
  const profile = createUser();
  profile.then((r) => {
    str += `${r.firstName} ${r.lastName}`;
    console.log(str);
  });
}
