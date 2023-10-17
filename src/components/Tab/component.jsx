import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { Button } from "../Button/component";

export const Tab = ({restaurantId, onClick, type}) => {
  const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
  return <Button
    children={restaurant.name}
    onClick={onClick}
    type={type}
    size="medium"
  ></Button>
}
