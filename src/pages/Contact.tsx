import { useEffect } from 'react';
import { initAnimations } from '../utils/animations';
import style from './Contact.module.css';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Contact = () => {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <>
      <main className="colorlib-contact">
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
              <div className="row">
                <div
                  className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                  data-animate-effect="fadeInLeft">
                  <form action="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name=""
                        id="message"
                        cols={30}
                        rows={7}
                        className="form-control"
                        placeholder="Message"></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary btn-send-message"
                        value="Send Message"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
