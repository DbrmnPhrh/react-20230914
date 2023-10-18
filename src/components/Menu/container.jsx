import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../constants/statuses";
import { selectDishIds, selectDishLoadingStatus } from "../../redux/entities/dish/selectors";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";
import { Menu } from "./component";

export const MenuContainer = (restaurantId) => {
  const dishIds = useSelector(selectDishIds);
  const loadingStatus = useSelector(selectDishLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [restaurantId]); // Хук useEffect() будет вызываться при каждом изменении restaurantId

  return loadingStatus === REQUEST_STATUS.pending ? <div>Loading...</div> : <Menu dishIds={dishIds}/>;
}
