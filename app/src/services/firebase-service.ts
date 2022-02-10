import axios from 'axios';
import { ContactFormData } from '../models/contactFormData';
import { config } from '../config';

function sendEmail({ email, message, name, phoneNumber }: ContactFormData) {
  return axios.post(config.firebaseUrl, {
    email,
    message,
    name,
    phoneNumber,
  });
}

const firebaseService = {
  sendEmail,
};

export default firebaseService;
