import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../constants/statuses";
import { selectRestaurantById, selectRestaurantLoadingStatus } from "../../redux/entities/restaurant/selectors";
import { getRestaurant } from "../../redux/entities/restaurant/thunks/get-restaurant";
import { Restaurant } from "./component";

export const RestaurantContainer = ({restaurantId}) => {
  const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
  const loadingStatus = useSelector(selectRestaurantLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant(restaurantId));
  }, [restaurantId]);

  return loadingStatus === REQUEST_STATUS.pending ? <div>Loading...</div> : <Restaurant restaurant={restaurant} />;
}
