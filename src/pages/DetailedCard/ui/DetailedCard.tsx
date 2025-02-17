import { useParams } from "react-router-dom";
import Card from "../../../entities/Card/ui/Card";
import { useGetCountriesQuery } from "../../../shared/api/jsonCountriesApi";
import { useTranslation } from "react-i18next";

const DetailedCard = () => {
  const params = useParams();
  const { data, isError, isLoading} = useGetCountriesQuery();
  const { t} = useTranslation();

  if (isLoading) return <p>{t("loading")}</p>;
  if (isError) return <p>{t("error")}</p>;
  const selectedCountry = data.find(
    (country: any) => country.cca3 === params.cardId
  );

  return (
    <div className="detailed-info">
      <div className="detailed-info-container">
        <div className="main-info">
          <img
            src={selectedCountry.flags.png}
            alt={selectedCountry.name.common}
            className="flag"
          />
          <h2>{selectedCountry.name.common}</h2>
        </div>
        <div className="secondary-info">
          <p>{t("region") + ": " + selectedCountry.region}</p>
          <p>{t("population") + ": " + selectedCountry.population}</p>
          {!selectedCountry.borders ? (<p>{t("no-bordering-countries")}</p>) : <></>}
        </div>
      </div>
      {selectedCountry.borders ? (
        <div>
          <h2>{t("bordering-countries")}</h2>
          <div className="card-container">
            {selectedCountry.borders.map((code: any) => (
              <Card
                country={data.find((item: any) => item.cca3 === code)}
                countryId={code}
                key={code}
              />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailedCard;
