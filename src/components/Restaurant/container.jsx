import { Restaurant } from "./component";

export const RestaurantContainer = ({restaurantId, restaurants}) => {
  const restaurant = restaurants.find(restaurant => restaurant.id === restaurantId);

  return restaurant && <Restaurant restaurant={restaurant} />;
}
