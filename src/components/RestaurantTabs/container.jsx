import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../constants/statuses";
import { selectRestaurantIds, selectRestaurantLoadingStatus } from "../../redux/entities/restaurant/selectors";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = (props) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const loadingStatus = useSelector(selectRestaurantLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    console.log(restaurantIds);
  }, []); // Хук useEffect вызовется один раз при маунте компонента

  return loadingStatus === REQUEST_STATUS.pending ? <div>Loading...</div> : <RestaurantTabs {...props} restaurantIds={restaurantIds} />;
}
