import { Dish } from "../Dish/component";

export const Menu = ({dishIds}) => {

  return <div>
    <h3>Menu</h3>
    <ul>
      {dishIds?.length > 0 && dishIds.map(id => <li key={id}><Dish dishId={id} /></li>)}
    </ul>
  </div>
}
