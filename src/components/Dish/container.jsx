import { Dish } from "./component";

export const DishContainer = ({dish}) => {
  return dish ? <Dish dishName={dish.name}/> : null;
}
