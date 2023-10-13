import { useSelector } from "react-redux";
import { Dish } from "../Dish/component";

export const Menu = () => {

  const dishIds = useSelector(state => state.dish.ids);

  return <div>
    <h3>Menu</h3>
    <ul>
      {dishIds?.length > 0 && dishIds.map(id => <li key={id}><Dish dishId={id} /></li>)}
    </ul>
  </div>
}
