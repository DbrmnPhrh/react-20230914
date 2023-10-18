import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurants/thunks/get-restaurants";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return <RestaurantTabs {...props} />;
}
