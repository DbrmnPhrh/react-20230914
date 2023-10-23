import { DishContainer } from "../Dish/container";

export const Menu = ({menuIds}) => {

  return <div>
    <h3>Menu</h3>
    <ul>
      {menuIds.map(id => <li key={id}><DishContainer dishId={id} /></li>)}
    </ul>
  </div>
}
