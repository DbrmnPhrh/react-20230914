import { useGetDishesQuery } from "../../services/api";
import { Menu } from "./component";

export const MenuContainer = ({restaurantId}) => {
	const {data: dishes, isSuccess: isDishesLoaded} = useGetDishesQuery(restaurantId);

  return !isDishesLoaded ? <div>Loading...</div> : <Menu menu={dishes}/>;
}
