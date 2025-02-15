import { useGetCountriesQuery } from "../../../shared/api/jsonCountriesApi";

const MainSection = () => {
  const { data } = useGetCountriesQuery();
  return (
    <section>
      <div className="card-container">
        {data ? (
          data.map((item: any, itemId: number) => {
            return (
              <div key={itemId} className="card">
                <img src={item.flags.png} alt={item.name.common} width={120} />
                <p>{item.name.common}</p>
                <p>{item.population}</p>
              </div>
            );
          })
        ) : (
          <p>h</p>
        )}
      </div>
    </section>
  );
};

export default MainSection;
