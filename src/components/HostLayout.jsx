import { NavLink, Outlet } from "react-router-dom";

export function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <nav className="host-nav">
        {/* end marca el final de la ruta "to" como el final (/host), de esta forma por ej la ruta /host/icome no hara match evitando el error de tener 2 links con la propiedad isActive */}
        <NavLink end style={({ isActive }) => (isActive ? activeStyles : null)} to=".">
          {/* "."  representa la ruta actual es decir /host*/}
          Dashboard
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyles : null)} to="income">
          Income
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyles : null)} to="vans">
          Vans
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyles : null)} to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </section>
  );
}
