import { useGetCountriesQuery } from "../../../shared/api/jsonCountriesApi";
import Header from "../../../widgets/Header/ui/Header";
import MainSection from "../../../widgets/MainPage/ui/MainSection";
import Sidebar from "../../../widgets/Sidebar/ui/Sidebar";

const MainPage = () => {
  const { data } = useGetCountriesQuery();
  console.log(data);

  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <MainSection />
      </div>
    </>
  );
};

export default MainPage;
