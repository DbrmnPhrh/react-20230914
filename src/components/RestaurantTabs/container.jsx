import { REQUEST_STATUS } from "../../constants/statuses";
import { useRequest } from "../../hooks/use-request";
import { getRestaurantsIfNotExist } from "../../redux/entities/restaurant/thunks/get-restaurant";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = (props) => {
  const loadingStatus = useRequest(getRestaurantsIfNotExist);
  return loadingStatus === REQUEST_STATUS.pending ? <div>Loading...</div> : <RestaurantTabs {...props} />;
}
