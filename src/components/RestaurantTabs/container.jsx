import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../constants/statuses";
import { selectRestaurantIds, selectRestaurantLoadingStatus } from "../../redux/entities/restaurants/selectors";
import { getRestaurants } from "../../redux/entities/restaurants/thunks/get-restaurants";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = (props) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const loadingStatus = useSelector(selectRestaurantLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return loadingStatus === REQUEST_STATUS.pending ? <div>Loading...</div> : <RestaurantTabs {...props} restaurantIds={restaurantIds} />;
}
