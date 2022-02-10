import { useEffect } from 'react';
import { initAnimations } from '../../utils/animations';

const Project = () => {
  useEffect(() => {
    initAnimations();
  }, []);

  return <main>Project Details</main>;
};

export default Project;
