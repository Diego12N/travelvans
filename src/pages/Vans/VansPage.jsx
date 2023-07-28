import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export function VansPage() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const vansFiltered = typeFilter && typeFilter != "all" ? vans.filter((van) => van.type === typeFilter) : vans;

  const filterVans = (e) => {
    setSearchParams({
      type: e.target.value.toLowerCase(),
    });
  };

  useEffect(() => {
    console.log("rerenderizado");
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanItem = vansFiltered.map((van) => {
    return (
      <div key={van.id} className="van-tile">
        <Link to={`/vans/${van.id}`}>
          <img src={van.imageUrl} alt={van.name} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    );
  });

  return (
    <div className="van-list-container">
      <h1>Explore ou van options</h1>
      <input type="button" value="Simple" onClick={filterVans} />
      <input type="button" value="Rugged" onClick={filterVans} />
      <input type="button" value="All" onClick={filterVans} />
      <div className="van-list">{vanItem}</div>
    </div>
  );
}
