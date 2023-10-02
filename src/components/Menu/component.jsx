import { Dish } from "../Dish/component"

export const Menu = ({dishes}) => (
  <div>
    <ul>
     {dishes.map(dish => <li key={dish.id}><Dish dishName={dish.name} /></li>)}
   </ul>
  </div>
)
