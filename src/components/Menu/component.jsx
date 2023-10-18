import { DishContainer } from "../Dish/container";

export const Menu = ({dishIds}) => {

  return <div>
    <h3>Menu</h3>
    <ul>
      {dishIds.map(id => <li key={id}><DishContainer dishId={id} /></li>)}
    </ul>
  </div>
}
