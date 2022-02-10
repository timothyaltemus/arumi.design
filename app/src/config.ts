import { Config } from './models/config';

export const config: Config = {
  firebaseUrl:
    process.env.REACT_APP_FIREBASE_URL ??
    'http://localhost:5001/arumi-design/us-central1/sendEmail',
};
