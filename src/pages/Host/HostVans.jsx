import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <section>
      <ul className="host-vans-list">
        {vans ? (
          vans.map((van) => {
            return (
              <li className="host-vans-item" key={van.id}>
                <Link className="host-vans-link" to={van.id}>
                  {/* Puedo utilizar un path relative to={van.id} debido a que en el contexto en el que se encuentra el link, no require del absolute path (Rutas anidadas /host/vans/) */}
                  <img src={van.imageUrl} alt="" />
                  <div>
                    <h3>{van.name}</h3>
                    <span>{van.price}/day</span>
                  </div>
                </Link>
              </li>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
    </section>
  );
}
