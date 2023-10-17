import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { Tab } from "../Tab/component";

export const RestaurantTabs = ({onTabClick, activeRestaurantId}) => {
  	const restaurantIds = useSelector(state => selectRestaurantIds(state));

    return <div className={classNames("display-flex", 'margin-t-3')}>
              {restaurantIds.length > 0 && restaurantIds.map(id => (
                <div key={id} className={classNames("margin-l-2")}>
                  <Tab restaurantId={id} onClick={() => onTabClick(id)} type={id === activeRestaurantId ? "active" : "primary"} />
                </div>
              ))}
           </div>
}
