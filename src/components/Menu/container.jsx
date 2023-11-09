import { useGetDishesQuery, useLazyGetDishesQuery } from "../../services/api";
import { Menu } from "./component";

export const MenuContainer = ({restaurantId}) => {
	const {data: dishes, isFetching} = useGetDishesQuery(restaurantId);
	const [loadDishes, {data: lazyDishes, isFetching: isLazyFetching}] = useLazyGetDishesQuery(restaurantId);

  return (isFetching || isLazyFetching) ? <div>Loading...</div> : <Menu menu={isLazyFetching ? lazyDishes : dishes} loadDishes={loadDishes}/>;
}
