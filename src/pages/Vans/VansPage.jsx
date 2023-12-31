import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {getVans} from "../../api";

export function VansPage() {
	const [vans, setVans] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const typeFilter = searchParams.get("type");

	const vansFiltered = typeFilter && typeFilter != "all" ? vans.filter((van) => van.type === typeFilter) : vans;

	const handleFilters = (key, value) => {
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}

			return prevParams;
		});
	};

	useEffect(() => {
		async function loadVans() {
			setLoading(true);

			try {
				const data = await getVans();
				setVans(data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		}

		loadVans();
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>There was an error: {error.message}</h1>;
	}

	const vanItem = vansFiltered.map((van) => {
		return (
			<div key={van.id} className="van-tile">
				<Link to={van.id} state={{search: `?${searchParams.toString()}`, type: searchParams.get("type")}}>
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
			<div className="vans-list-filter-buttons">
				<button onClick={() => handleFilters("type", "simple")} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>
					Simple
				</button>
				<button onClick={() => handleFilters("type", "rugged")} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>
					Rugged
				</button>
				<button onClick={() => handleFilters("type", "luxury")} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>
					Luxury
				</button>
				{typeFilter && (
					<button onClick={() => handleFilters("type", null)} className="van-type clear-filters">
						Clear Filters
					</button>
				)}
			</div>
			<div className="van-list">{vanItem}</div>
		</div>
	);
}
