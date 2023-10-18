import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/selectors";
import { Tab } from "../Tab/component";

export const RestaurantTabContainer = ({restaurantId, ...props}) => {
	const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

	return restaurant
		? <Tab {...props} title={restaurant.name}/>
		: null;
}
