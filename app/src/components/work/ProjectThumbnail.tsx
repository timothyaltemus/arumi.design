import { Link } from 'react-router-dom';
import { Work } from '../../models/work';

export type ProjectThumbnailProps = {
  project: Work;
};

const ProjectThumbnail = ({ project }: ProjectThumbnailProps) => {
  const link = `/projects/${project.id}`;
  return (
    <Link
      to={link}
      className="project shadow"
      style={{ backgroundImage: `url(images/${project.thumbnail})` }}>
      <div className="desc">
        <div className="con">
          <h3 style={{ color: project.thumbnailContrast ?? '#fff' }}>
            {project.title}
          </h3>
          <span>{project.tags?.join(', ')}</span>
          <p className="icon">
            <span>
              <div role="button">
                <i className="icon-eye"></i> {project.views}
              </div>
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectThumbnail;
