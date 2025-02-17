import { Link } from "react-router-dom";
import i18n from "../../../shared/i18n/i18n";


const Card = (props:any) => {
    const {country, countryId} = props
  return (
    <div>
      <Link to={`/country/${countryId}`} key={countryId} className="card">
        <img src={country.flags.png} alt={country.name.common} />
        <p>{i18n.language==="en" ? country.name.common : country.translations.rus.common}</p>
      </Link>
    </div>
  );
};

export default Card;
