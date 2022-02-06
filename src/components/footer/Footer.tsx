import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <small>
          Copyright &copy; {new Date().getFullYear()} All rights reserved
        </small>
        {/** <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
        <small>
          Template by{' '}
          <a href="https://colorlib.com" target="_blank" rel="noreferrer">
            Colorlib
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
