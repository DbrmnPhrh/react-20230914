import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../constants/statuses";
import { selectDishIds, selectDishLoadingStatus } from "../../redux/entities/dish/selectors";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";
import { DishContainer } from "../Dish/container";

export const Menu = ({restaurantId}) => {

  const dishIds = useSelector(selectDishIds);
  const loadingStatus = useSelector(selectDishLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(restaurantId));
    console.log(dishIds);
  }, []); // Хук useEffect вызовется один раз при маунте компонента

  return <div>
    <h3>Menu</h3>
    <ul>
      {
        loadingStatus === REQUEST_STATUS.pending ? <div>Loading...</div> : dishIds.map(id => <li key={id}><DishContainer dishId={id} /></li>)
      }
    </ul>
  </div>
}
