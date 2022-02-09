import { useEffect } from 'react';
import SmallContact from '../components/contact/SmallContact';
import { initAnimations } from '../utils/animations';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Work = () => {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <>
      <div className="colorlib-work">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3">
              <span className="heading-meta">Portfolio</span>
              <h2
                className="colorlib-heading animate-box"
                data-animate-effect="fadeInLeft">
                My Work
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft">
              <div
                className="project"
                style={{ backgroundImage: 'url(images/work-1.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work-single.html">Work 01</a>
                    </h3>
                    <span>Branding, Ilustration</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft">
              <div
                className="project"
                style={{ backgroundImage: 'url(images/work-2.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work-single.html">Work 02</a>
                    </h3>
                    <span>Logo, Web, Branding</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft">
              <div
                className="project"
                style={{ backgroundImage: 'url(images/work-3.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work-single.html">Work 03</a>
                    </h3>
                    <span>Illustration, Logo</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft">
              <div
                className="project"
                style={{ backgroundImage: 'url(images/work-4.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work-single.html">Work 04</a>
                    </h3>
                    <span>Web, Logo, Branding</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft">
              <div
                className="project"
                style={{ backgroundImage: 'url(images/work-5.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work-single.html">Work 05</a>
                    </h3>
                    <span>Illustration, Logo</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft">
              <div
                className="project"
                style={{ backgroundImage: 'url(images/work-6.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work-single.html">Work 06</a>
                    </h3>
                    <span>Web, Logo, Branding</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft">
              <div
                className="project"
                style={{ backgroundImage: 'url(images/work-7.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work-single.html">Work 07</a>
                    </h3>
                    <span>Illustration, Logo</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft">
              <div
                className="project"
                style={{ backgroundImage: 'url(images/work-8.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work-single.html">Work 08</a>
                    </h3>
                    <span>Web, Logo, Branding</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInLeft">
              <ul className="pagination">
                <li className="disabled">
                  <a href="#">&laquo;</a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">&raquo;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SmallContact />
    </>
  );
};

export default Work;
