import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRestaurant } from "../../redux/entities/restaurant/thunks/get-restaurant";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

  return <RestaurantTabs {...props} />;
}
