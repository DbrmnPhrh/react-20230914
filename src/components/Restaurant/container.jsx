import { Restaurant } from "./component";

export const RestaurantContainer = ({restaurantId, restaurants}) => {
  const restaurant = restaurants.find(r => r.id === restaurantId);

  return restaurant && <Restaurant restaurant={restaurant} />;
}
