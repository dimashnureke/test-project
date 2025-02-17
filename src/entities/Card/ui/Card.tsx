import { Link } from "react-router-dom";

const Card = (props:any) => {
    const {country, countryId} = props
  return (
    <div>
      <Link to={`/country/${countryId}`} key={countryId} className="card">
        <img src={country.flags.png} alt={country.name.common} width={120} />
        <p>{country.name.common}</p>
      </Link>
    </div>
  );
};

export default Card;
