import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { initAnimations } from '../../utils/animations';
import style from './Project.module.css';
import { getProject, getProjectByIndex } from '../../data/works';
import { resizeProjectDetails } from '../../utils/sizing';
import SmallContact from '../../components/contact/SmallContact';

const Project = () => {
  window.scroll(0, 0);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
    initAnimations();
    resizeProjectDetails();

    window.addEventListener('resize', resizeProjectDetails);
  }, [id]);

  const [project, index, max] = getProject(id ?? '');
  if (!id || !project) {
    return <Navigate replace to="/" />;
  }

  const goBack = () => {
    navigate('/work');
  };

  const goToProject = (index: number) => {
    if (index >= 0 && index < max) {
      const id = getProjectByIndex(index).id;
      navigate(`/projects/${id}`);
    }
  };

  return (
    <>
      <div className="project-details-page" id="">
        <div className="container-fluid">
          <div className={style['x-container']}>
            <button className={style.x} onClick={goBack}>
              <i className="icon-times"></i>
            </button>
          </div>
          <div className={style['project-details']}>
            <div
              className={[style.images, 'animate-box'].join(' ')}
              data-animate-effect="fadeInRight"
              id="project-details-image">
              <div className={style['image-container']}>
                {project.images.map((image, key) => (
                  <img
                    key={key}
                    style={key !== 0 ? { marginTop: '2.5rem' } : {}}
                    className={style.image}
                    src={`/images/${image}`}
                    alt=""
                  />
                ))}
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
                {project.links && project.links.length > 0 ? (
                  <div className="animate-box" data-animate-effect="fadeInLeft">
                    To see more about this project please visit the following
                    links :
                    <ul style={{ textAlign: 'left' }}>
                      {project.links?.map((link, key) => (
                        <li>
                          <a
                            key={key}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer">
                            {link.text ?? link.url}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className={style['nav-container']}>
          <button
            className={style['page-button']}
            disabled={index === 0}
            onClick={() => goToProject(index - 1)}>
            <i className="icon-arrow-left3"></i>
          </button>
          <div>Project {index + 1}</div>
          <button
            className={style['page-button']}
            disabled={index === max - 1}
            onClick={() => goToProject(index + 1)}>
            <i className="icon-arrow-right3"></i>
          </button>
        </div>
      </div>
      <SmallContact />
    </>
  );
};

export default Project;
