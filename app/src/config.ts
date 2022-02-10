import { Config } from './models/config';

if (!process.env.REACT_APP_FIREBASE_URL) {
  throw Error('REACT_APP_FIREBASE_URL is not defined');
}

export const config: Config = {
  firebaseUrl: process.env.REACT_APP_FIREBASE_URL,
};
