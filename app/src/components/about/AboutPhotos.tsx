import styles from './AboutPhotos.module.css';

const AboutPhotos = () => {
  const mainPhotoClasses = ['animate-box', styles['main-photo']];
  return (
    <>
      <div
        className={mainPhotoClasses.join(' ')}
        data-animate-effect="fadeInRight"
        style={{
          backgroundImage: 'url(images/headshot.jpg)',
        }}></div>
    </>
  );
};

export default AboutPhotos;
