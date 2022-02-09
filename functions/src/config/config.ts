import * as functions from 'firebase-functions';
import * as dotenv from 'dotenv';
import { Config } from '../models/config';

dotenv.config();

if (!process?.env?.SMTP_USERNAME) {
  functions.logger.error('SMTP_USERNAME is not set in environment variables');
  throw Error('SMTP_USERNAME is not defined');
}

if (!process?.env?.SMTP_PASSWORD) {
  functions.logger.error('SMTP_USERNAME is not set in environment variables');
  throw Error('SMTP_PASSWORD is not defined');
}

export const config: Config = {
  username: process.env.SMTP_USERNAME,
  password: process.env.SMTP_PASSWORD,
  email: process.env.TO_EMAIL ?? 'info@arumi.design',
};
