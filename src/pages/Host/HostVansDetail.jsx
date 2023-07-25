import { useEffect, useState } from "react";
import { Link, Outlet, useParams, NavLink } from "react-router-dom";

export function HostVansDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));

    van ? console.log(van) : console.log("loading");
  }, [params.id]);

  if (!van) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        {/* relative="path" permite que los ".." funionen en base al path y no en base a la anidacion dentro de mi app
		ya que de no poner esta propiedad, el ".." nos llevaria a "/host" y  no a "/host/vans"*/}
        &larr;<span> Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink end to="." style={({ isActive }) => (isActive ? activeStyles : null)}>
            Detail
          </NavLink>
          <NavLink to="pricing" style={({ isActive }) => (isActive ? activeStyles : null)}>
            Pricing
          </NavLink>
          <NavLink to="photos" style={({ isActive }) => (isActive ? activeStyles : null)}>
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ van }} />
      </div>
    </section>
  );
}
