import { useEffect } from 'react';
import SmallContact from '../components/contact/SmallContact';
import { initAnimations } from '../utils/animations';
import ProjectThumbnail from '../components/work/ProjectThumbnail';

import { work } from '../data/work';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Work = () => {
  useEffect(() => {
    window.scroll(0, 0);
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
            {work.map((project, index) => (
              <div
                key={index}
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft">
                <ProjectThumbnail key="index" project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SmallContact />
    </>
  );
};

export default Work;
