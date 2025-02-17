import Card from "../../../entities/Card/ui/Card";
import { useGetCountriesQuery } from "../../../shared/api/jsonCountriesApi";
import { useSelector } from "react-redux";
import { selectFilteredCountries } from "../../../shared/modal/selectors";

const MainSection = () => {
  const countries = useSelector(selectFilteredCountries);
  const { data,isError, isLoading } = useGetCountriesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
console.log(data)
  return (
    <section>
      <div className="card-container">
        {countries ? (
          countries.map((country: any, ) => {
            return <Card country={country} countryId={country.cca3} key={country.cca3} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default MainSection;
