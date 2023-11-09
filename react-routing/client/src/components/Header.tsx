import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <Link>
          </Link>
          <ul className="navbar-nav mr-auto">
            {/* TODO: Make these links to About and Catalog, with className "title" */}
            <li className="nav-item nav-link">About</li>
            <li className="nav-item nav-link">Catalog</li>
          </ul>
        </div>
      </nav>
      {/* Render the Outlet here. */}
    </div>
  );
}
