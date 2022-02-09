import { useEffect } from 'react';
import { initAnimations } from '../../utils/animations';

const Project = () => {
  useEffect(() => {
    initAnimations();
  }, []);

  return <main></main>;
};

export default Project;
