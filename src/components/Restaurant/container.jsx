import { useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../services/api";
import { Restaurant } from "./component";

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();
  const {data: restaurant} = useGetRestaurantsQuery(null, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === restaurantId),
    })
  });

  return restaurant && <Restaurant restaurant={restaurant} />;
}
