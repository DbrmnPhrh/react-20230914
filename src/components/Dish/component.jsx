import { useSelector } from "react-redux";
import { selectDishNameById } from "../../redux/entities/dish/selectors";
import { Counter } from "../Counter/component";

export const Dish = ({dishId}) => {
  const dishName = useSelector(state => selectDishNameById(state, dishId));
  return <div>{dishName}: <Counter min={0} max={5}/></div>;
}
