import './Header.css';
import { Link, Outlet } from 'react-router-dom';
export function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link title">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link title">
                Catalog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
