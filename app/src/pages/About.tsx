import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutPhotos from '../components/about/AboutPhotos';
import SmallContact from '../components/contact/SmallContact';
import { initAnimations } from '../utils/animations';
import styles from './About.module.css';

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
    initAnimations();
  }, []);

  return (
    <>
      <div className="colorlib-about">
        <div className="container-fluid">
          <div className={styles.row}>
            <div className={styles.col} style={{ position: 'relative' }}>
              <AboutPhotos />
            </div>
            <div
              className={[styles.col, 'animate-box'].join(' ')}
              data-animate-effect="fadeInLeft">
              <div className="about-desc">
                <span className="heading-meta">Welcome &amp; Introduction</span>
                <h3 className={styles.header}>Hello, I Am Arumi!</h3>
                <p>
                  I am a User Experience Technologist based in Austin, Texas. I
                  enjoy carefully investigating human experience and behavior. I
                  have a strong passion to understand how humans interact with
                  multiple interfaces. I dream up new ways to spark and distill
                  insight, and inspire teams and clients to address people's
                  needs through bold, optimistic design.
                </p>
                <p>
                  I graduated with a Bachelor’s degree in Management Information
                  Systems at the University of Houston in May 2020.
                </p>
                <p>
                  My passion for UX Design and Research started while I was
                  enrolled in a 2 year rotational program at an Energy
                  Technology company. I was presented with an opportunity to
                  rotate with the HQ UX team and have since been involved with
                  them carefully curating designs and research for the business.
                </p>
                <p>
                  Aside from this, I enjoy running, participating in marathons
                  and being a full time dog mom to my puppy,{' '}
                  <a
                    href="https://www.instagram.com/pixeltheminidood/"
                    target="_blank"
                    rel="noreferrer">
                    Pixel
                  </a>
                  !
                </p>
                <Link className="btn btn-primary" to="/work">
                  See My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SmallContact />
    </>
  );
};

export default About;
