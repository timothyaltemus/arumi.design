import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

const KNOWN_ROUTES = [/^\/about/, /^\/contact/, /^\/work/, /^\/work\/.*/];

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
      return 'colorlib-active';
    }

    if (location.pathname.startsWith(route)) {
      return 'colorlib-active';
    }

    return '';
  }
  return (
    <aside id="colorlib-aside" className={sidebarClasses}>
      <h1 id="colorlib-logo">
        <Link to="/">
          <span>Wo</span>
          <span>rk</span>
        </Link>
      </h1>
      <nav id="colorlib-main-menu" role="navigation">
        <ul>
          <li
            className={[
              getLinkClasses('/about', true),
              !isKnownPathname() ? '' : 'colorlib-active'
            ].join(' ')}
          >
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
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/arumi-choudhary/">
              <i className="icon-linkedin2"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
