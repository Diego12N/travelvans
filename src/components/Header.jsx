import { Link, NavLink } from "react-router-dom";

export function Header() {
  const test = true;
  return (
    <header>
      <Link to="/">TRAVEL'VANS</Link>
      <nav>
        <NavLink to="/host" className={({ isActive }) => (isActive ? "active-link" : null)}>
          Host
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : null)}>
          About
        </NavLink>
        <NavLink to="/vans" className={({ isActive }) => (isActive ? "active-link" : null)}>
          Vans List
        </NavLink>
      </nav>
    </header>
  );
}
