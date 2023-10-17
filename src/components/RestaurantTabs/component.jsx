import classNames from "classnames";
import { RestaurantTabContainer } from "../RestaurantTab/container";

export const RestaurantTabs = ({onTabClick, activeRestaurantId, restaurantIds}) => {
    return <div className={classNames("display-flex", 'margin-t-3')}>
              {restaurantIds.length > 0 && restaurantIds.map(id => (
                <div key={id} className={classNames("margin-l-2")}>
                  <RestaurantTabContainer
                    restaurantId={id}
                    onClick={() => onTabClick(id)}
                    isActive={id === activeRestaurantId}
                  />
                </div>
              ))}
           </div>
}
