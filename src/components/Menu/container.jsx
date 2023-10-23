import { useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../constants/statuses";
import { useRequest } from "../../hooks/use-request";
import { getDishesByRestaurantIfNotExist } from "../../redux/entities/dish/thunks/get-dishes";
import { selectRestaurantMenuById } from "../../redux/entities/restaurant/selectors";
import { Menu } from "./component";

export const MenuContainer = ({restaurantId}) => {
  const restaurantMenuIds = useSelector((state) => selectRestaurantMenuById(state, restaurantId));
  const loadingStatus = useRequest(getDishesByRestaurantIfNotExist, restaurantId);

  return loadingStatus === REQUEST_STATUS.pending ? <div>Loading...</div> : <Menu menuIds={restaurantMenuIds}/>;
}
