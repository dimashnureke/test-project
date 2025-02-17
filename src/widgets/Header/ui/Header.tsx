import { useDispatch, useSelector } from "react-redux";
import {
  selectMinPopulation,
  selectRegion,
  selectSearchQuery,
} from "../../../shared/modal/selectors";
import {
  setSearchQuery,
  setMinPopulation,
  setRegion,
} from "../../../shared/modal/countrySlice";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { loadFilters, saveFilters } from "../../../shared/localStorage";
import { setFilters } from "../../../shared/modal/countrySlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const region = useSelector(selectRegion);
  const minPopulation = useSelector(selectMinPopulation);
  const [burgerClass, setBurgerClass] = useState("bar unclicked");
  const [sideBarClass, setSideBarClass] = useState("sideBar hidden");
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const { t, i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);

  const updateBurger = () => {
    if (!isBurgerClicked) {
      setBurgerClass("bar clicked");
      setSideBarClass("sideBar visible");
    } else {
      setBurgerClass("bar unclicked");
      setSideBarClass("sideBar hidden");
    }
    setIsBurgerClicked(!isBurgerClicked);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const savedFilters = loadFilters();
    if (savedFilters) {
      dispatch(setFilters(savedFilters));
    }
    setIsInitialized(true);
  }, [dispatch]);
  
  
  useEffect(() => {
    if (isInitialized) {
      saveFilters({ searchQuery, region, minPopulation });
    }
  }, [searchQuery, region, minPopulation, isInitialized]);

  
  return (
    <>
      <header>
        <div className="change-language-container">
          <button
            onClick={() => {
              changeLanguage("en");
            }}
          >
            EN
          </button>
          <button
            onClick={() => {
              changeLanguage("ru");
            }}
          >
            RU
          </button>
        </div>
        <Link to={"/"} className="logo">
          Countries
        </Link>
        <div
          className="hamburger"
          onClick={() => {
            updateBurger();
          }}
        >
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
        </div>

        <div className={sideBarClass}>
          <div className="filters-container">
            <div className="filter by-name">
              <form>
                <label htmlFor="filter-search">{t("search-by-name")}:</label>
                <input
                  type="text"
                  id="filter-search"
                  value={searchQuery}
                  onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                />
              </form>
            </div>

            <div className="filter by-region">
              <form>
                <label htmlFor="filter-region">{t("search-by-region")}:</label>
                <select
                  value={region}
                  id="filter-region"
                  onChange={(e) => dispatch(setRegion(e.target.value))}
                >
                  <option value="All">{t("all-regions")}</option>
                  <option value="Africa">{t("africa")}</option>
                  <option value="Americas">{t("americas")}</option>
                  <option value="Asia">{t("asia")}</option>
                  <option value="Europe">{t("europe")}</option>
                  <option value="Oceania">{t("oceania")}</option>
                </select>
              </form>
            </div>

            <div className="filter by-population">
              <form>
                <label htmlFor="filter-population">
                  {t("search-by-population")}:
                </label>
                <input
                  type="number"
                  id="filter-population"
                  placeholder="Min Population"
                  value={minPopulation}
                  onChange={(e) =>
                    dispatch(setMinPopulation(Number(e.target.value)))
                  }
                />
              </form>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
