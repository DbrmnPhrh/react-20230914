import { useSelector } from "react-redux";
import { Counter } from "../Counter/component";

export const Dish = ({dishId}) => {
  const dish = useSelector(state => state.dish.entities[dishId]);
  return <div>{dish.name}: <Counter min={0} max={5}/></div>;
}
