import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../constants/statuses";
import { getDishesByRestaurantIfNotExist } from "../../redux/entities/dish/thunks/get-dishes";
import { selectRequestStatus } from "../../redux/entities/request/selectros";
import { selectRestaurantMenuById } from "../../redux/entities/restaurant/selectors";
import { Menu } from "./component";

export const MenuContainer = ({restaurantId}) => {
  const request = useRef();
  const restaurantMenuIds = useSelector((state) => selectRestaurantMenuById(state, restaurantId));
  const loadingStatus = useSelector((state) => selectRequestStatus(state, request.current?.requestId));
  const dispatch = useDispatch();

  useEffect(() => {
    request.current = dispatch(getDishesByRestaurantIfNotExist(restaurantId));

    return () => { // При обновлении restaurantId или unmount сначала вызывается предыдущий useEffect
      request.current.abort();
      request.current = null;
    }
  }, [restaurantId]); // Хук useEffect() будет вызываться при каждом изменении restaurantId

  return loadingStatus === REQUEST_STATUS.pending ? <div>Loading...</div> : <Menu menuIds={restaurantMenuIds}/>;
}
