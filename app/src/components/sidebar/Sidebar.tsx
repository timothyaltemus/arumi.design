import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import logo from '../../logo.svg';
import { useState } from 'react';

const KNOWN_ROUTES = [
  /^\/about/,
  /^\/contact/,
  /^\/work/,
  /^\/work\/.*/,
  /^\/credits/,
  /^\/projects\/.*/,
];

const Sidebar = () => {
  const sidebarClasses = ['border', 'js-fullheight', styles.sidebar].join(' ');
  const location = useLocation();
  function isKnownPathname() {
    if (KNOWN_ROUTES.some((r) => r.test(location.pathname))) {
      return false;
    }
    return true;
  }

  function getLinkClasses(route: string, base: boolean = false) {
    if (base && location.pathname === '/') {
      return [styles.link, 'colorlib-active'].join(' ');
    }

    if (location.pathname.startsWith(route)) {
      return [styles.link, 'colorlib-active'].join(' ');
    }

    return styles.link;
  }

  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    if (document.body.classList.contains('offcanvas')) {
      document.body.classList.remove('offcanvas');
      setIsOpen(false);
    } else {
      document.body.classList.add('offcanvas');
      setIsOpen(true);
    }
  }

  const hamburgerBaseClasses = [
    'js-colorlib-nav-toggle',
    'colorlib-nav-toggle',
    styles.hamburger,
  ];

  const hamburgerClasses = isOpen
    ? [...hamburgerBaseClasses, 'active']
    : hamburgerBaseClasses;

  return (
    <>
      <div
        className={hamburgerClasses.join(' ')}
        onClick={toggleMenu}
        role="button">
        <i></i>
      </div>
      <aside id="colorlib-aside" className={sidebarClasses}>
        <Link className={styles['logo-container']} to="/">
          <img src={logo} className={styles.logo} alt="Arumi Design"></img>
        </Link>
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li
              className={[
                getLinkClasses('/about', true),
                !isKnownPathname() ? '' : 'colorlib-active',
              ].join(' ')}>
              <Link to="/about">About</Link>
            </li>
            <li className={getLinkClasses('/work')}>
              <Link to={'/work'}>Work</Link>
            </li>
            <li className={getLinkClasses('/contact')}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="colorlib-footer">
          <ul className={styles.socials}>
            <li>
              <a
                href="https://www.instagram.com/designsbyarumi/"
                target="_blank"
                rel="noreferrer">
                <i className="icon-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arumi-choudhary/"
                target="_blank"
                rel="noreferrer">
                <i className="icon-linkedin2"></i>
              </a>
            </li>
          </ul>
          <div className={styles.copyright}>
            <small>Copyright &copy; {new Date().getFullYear()}</small>
          </div>
          <div className={styles.credits}>
            <small>
              <Link to="/credits">Credits</Link>
            </small>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
