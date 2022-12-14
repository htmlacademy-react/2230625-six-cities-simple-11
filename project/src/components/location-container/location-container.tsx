import Location from '../../components/location/location';
import {locationList} from "../../const";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeLocation} from "../../store/actions";

function LocationContainer() {
  const activeLocation = useAppSelector((state) => state.locationName);
  const dispatch = useAppDispatch();

  const setActiveLocationCallback = (locationName: string) => {
    dispatch(changeLocation(locationName));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locationList.map((item) =>
            <Location
              isActive={item===activeLocation}
              key={item}
              locationName={item}
              setActiveLocationCallback={()=>{setActiveLocationCallback(item)}}/>
          )}
        </ul>
      </section>
    </div>
  );
}

export default LocationContainer;
