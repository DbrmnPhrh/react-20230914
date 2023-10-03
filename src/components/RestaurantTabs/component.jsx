import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { Tab } from "../Tab/component";

export const RestaurantTabs = ({restaurants, onTabClick, activeRestaurantIndex}) => {
    const {theme} = useContext(ThemeContext);

    return <div className={classNames("display-flex", 'margin-t-2')}>
              {restaurants.map((restaurant, index) => (
                <div key={restaurant.id} className={classNames("margin-l-2")}>
                  <Tab title={restaurant.name} onClick={() => onTabClick(index)} index={index} activeRestaurantIndex={activeRestaurantIndex} theme={theme} />
                </div>
              ))}
           </div>
}
