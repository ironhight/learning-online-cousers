import { errorMessage } from '../utils/messages.util';

const formRoutes = {
  signIn: [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      className: 'auth__form-control-input',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      className: 'auth__form-control-input',
    },
  ],
};

export default formRoutes;
