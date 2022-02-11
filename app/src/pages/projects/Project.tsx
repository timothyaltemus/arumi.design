import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { initAnimations } from '../../utils/animations';
import style from './Project.module.css';
import { getProject } from '../../data/work';
import { resizeProjectDetails } from '../../utils/sizing';

const Project = () => {
  useEffect(() => {
    window.scroll(0, 0);
    initAnimations();
    resizeProjectDetails();

    window.addEventListener('resize', resizeProjectDetails);
  }, []);

  const { id } = useParams();
  const project = getProject(id ?? '');
  if (!id || !project) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="project-details-page" id="">
      <div className="container-fluid">
        <div className={style['project-details']}>
          <div
            className={[style.images, 'animate-box'].join(' ')}
            data-animate-effect="fadeInRight"
            id="project-details-image">
            <div className={style['image-container']}>
              <img
                className={style.image}
                src={`/images/${project.image}`}
                alt=""
              />
            </div>
          </div>
          <div className={style.details}>
            <div
              className="animate-box"
              data-animate-effect="fadeInLeft"
              id="product-details-section">
              <h3 className="animate-box" data-animate-effect="fadeInRight">
                {project.title}
              </h3>
              <p className="animate-box" data-animate-effect="fadeInRight">
                Role: {project.role}
                <br />
                Type: {project.type}
                <br />
                Timeline: {project.timeline}
                <br />
                Platform: {project.platform}
              </p>
              <div className="animate-box" data-animate-effect="fadeInLeft">
                {project.description.map((paragraph, key) => (
                  <p key={key}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
