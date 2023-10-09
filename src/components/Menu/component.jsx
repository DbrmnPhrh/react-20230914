import { Dish } from "../Dish/component"

export const Menu = ({menu}) => (
  <div>
    <h3>Menu</h3>
    <ul>
     {menu.map(dish => <li key={dish.id}><Dish dishName={dish.name} /></li>)}
   </ul>
  </div>
)
