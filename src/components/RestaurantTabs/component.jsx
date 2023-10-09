import classNames from "classnames";
import { Tab } from "../Tab/component";

export const RestaurantTabs = ({restaurants, onTabClick, activeRestaurantIndex}) => {

    return <div className={classNames("display-flex", 'margin-t-2')}>
              {restaurants.map((restaurant, index) => (
                <div key={restaurant.id} className={classNames("margin-l-2")}>
                  <Tab title={restaurant.name} onClick={() => onTabClick(index)} type={index === activeRestaurantIndex ? "active" : "primary"} />
                </div>
              ))}
           </div>
}
