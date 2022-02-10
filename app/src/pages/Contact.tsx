import { useEffect, useState } from 'react';
import { initAnimations } from '../utils/animations';
import style from './Contact.module.css';
import firebaseService from '../services/firebase-service';
import Input from '../components/ui/control/Input';
import { defaultRequiredValidator, emailValidator } from '../utils/validators';
import TextArea from '../components/ui/control/TextArea';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
    initAnimations();
  }, []);

  const [error, setError] = useState<string>();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<{ value: string; valid: boolean }>({
    value: '',
    valid: false,
  });
  const [message, setMessage] = useState<{ value: string; valid: boolean }>({
    value: '',
    valid: false,
  });
  const [email, setEmail] = useState<{ value: string; valid: boolean }>({
    value: '',
    valid: false,
  });
  const [phoneNumber, setPhoneNumber] = useState<{
    value: string;
    valid: boolean;
  }>({
    value: '',
    valid: false,
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid()) {
      try {
        await firebaseService.sendEmail({
          email: email.value,
          message: message.value,
          name: name.value,
          phoneNumber: phoneNumber.value,
        });
        setError(undefined);
      } catch {
        setError('Something went wrong. Please try again later.');
      }
      setSubmitted(true);
    }
  };

  const isFormValid = () => {
    return email.valid && message.valid && name.valid && phoneNumber.valid;
  };

  return (
    <>
      <div className="colorlib-contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <span className="heading-meta">Read</span>
              <h2
                className="colorlib-heading animate-box"
                data-animate-effect="fadeInLeft">
                Get in Touch
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 col-md-push-6">
              <div
                className={[style.container, 'animate-box'].join(' ')}
                data-animate-effect="fadeInLeft">
                <div className={style.icon}>
                  <i className="icon-mail"></i>
                </div>
                <div className={style.text}>
                  <a href="mailto:info@arumi.design">info@arumi.design</a>
                </div>
              </div>

              <div
                className={[style.container, 'animate-box'].join(' ')}
                data-animate-effect="fadeInLeft">
                <div className={style.icon}>
                  <i className="icon-phone"></i>
                </div>
                <div className={style.text}>
                  <a href="tel://+18323597707">+1 (832) 359-7707</a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-md-pull-5">
              {submitted && (
                <div className="row">
                  <div className="col-md-10 col-md-offset-1 col-md-pull-1">
                    <div
                      className={`alert ${
                        !error ? 'alert-success' : 'alert-danger'
                      }`}>
                      {error ?? 'Your message has been sent. Thank you!'}
                    </div>
                  </div>
                </div>
              )}
              <div className="row">
                <div
                  className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                  data-animate-effect="fadeInLeft">
                  <form onSubmit={onSubmit}>
                    <Input
                      name="name"
                      placeholder="Name"
                      validators={[defaultRequiredValidator]}
                      setValue={setName}
                      type="text"
                      value={name.value}
                    />
                    <Input
                      name="email"
                      placeholder="Email"
                      setValue={setEmail}
                      type="email"
                      validators={[defaultRequiredValidator, emailValidator]}
                      value={email.value}
                    />
                    <Input
                      name="phone-number"
                      placeholder="Phone number"
                      setValue={setPhoneNumber}
                      type="text"
                      validators={[defaultRequiredValidator]}
                      value={phoneNumber.value}
                    />
                    <TextArea
                      cols={30}
                      name="message"
                      placeholder="Message"
                      rows={7}
                      setValue={setMessage}
                      value={message.value}
                      validators={[defaultRequiredValidator]}
                    />
                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-send-message"
                        disabled={!isFormValid()}>
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
