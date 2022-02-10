import * as nodemailer from 'nodemailer';
import { SentMessageInfo } from 'nodemailer/lib/sendmail-transport';
import { config } from '../config/config';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.username,
    pass: config.password,
  },
  logger: true,
});

/**
 * Sends an email from with the given email to info@arumi.design.
 *
 * @param from The email to put in the from field.
 * @param subject The subject of the email.
 * @param body The text to send in the email body.
 * @returns A promise with the result of the sent message.
 */
export const transportEmail = (
  from: string,
  subject: string,
  body: string
): Promise<SentMessageInfo> => {
  const mailOptions = {
    from,
    to: config.email,
    subject,
    text: body,
  };

  return transporter.sendMail(mailOptions);
};
