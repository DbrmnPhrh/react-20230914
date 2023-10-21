import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRestaurantsIfNotExist } from "../../redux/entities/restaurant/thunks/get-restaurant";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantsIfNotExist());
  }, []);

  return <RestaurantTabs {...props} />;
}
