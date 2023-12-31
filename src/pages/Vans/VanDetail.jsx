import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export function VanDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();
  const location = useLocation();
  console.log(location);
  // al utilizar location, me permite mantener el estado que envio como prop aunque recargue la pagina

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      <Link to={`..${"?" + search}`} relative="path" className="back-button">
        &larr;<span>Back to {`${type}`} vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
