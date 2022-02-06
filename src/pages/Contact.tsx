import { useEffect } from 'react';
import { initAnimations } from '../utils/animations';

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
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <i className="icon-globe-outline"></i>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="#">info@domain.com</a>
                  </p>
                </div>
              </div>

              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <i className="icon-map"></i>
                </div>
                <div className="colorlib-text">
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>

              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <i className="icon-phone"></i>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="tel://">+123 456 7890</a>
                  </p>
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
