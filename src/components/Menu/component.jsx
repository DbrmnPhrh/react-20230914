import { Button } from "../Button/component";
import { DishContainer } from "../Dish/container";

export const Menu = ({menu, loadDishes}) => {

  return <div>
    <h3>Menu</h3>
    <Button onClick={() => loadDishes()}>lazyLoadDishes</Button>
    <ul>
      {menu.map(dish => <li key={dish.id}><DishContainer dish={dish} /></li>)}
    </ul>
  </div>
}
