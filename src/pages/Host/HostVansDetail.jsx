import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function HostVansDetail() {
  const [van, setVan] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));

    van ? console.log(van) : console.log("loading");
  }, [params.id]);

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
      </div>
    </section>
  );
}
