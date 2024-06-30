import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

import CityItem from "./CityItem";
import { UseCities } from "../contexts/Citiescontext";
function CityList() {
  const { cities, isloading } = UseCities();
  if (isloading) return <Spinner />;
  if (!cities)
    return <Message message="Add your first city by clicking on map.." />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
export default CityList;
