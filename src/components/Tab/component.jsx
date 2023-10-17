import { useSelector } from "react-redux";
import { Button } from "../Button/component";

export const Tab = ({restaurantId, onClick, type}) => {
  const restaurant = useSelector(state => state.restaurant.entities[restaurantId]);
  return <Button
    children={restaurant.name}
    onClick={onClick}
    type={type}
    size="medium"
  ></Button>
}
