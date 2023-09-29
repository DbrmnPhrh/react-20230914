import { Tab } from "../Tab/component"

export const RestaurantTabs = ({restaurants, onTabClick}) => {
    return <div>
              {restaurants.map((restaurant, index) => (
                <Tab key={restaurant.id} title={restaurant.name} onClick={() => onTabClick(index)} />
              ))}
           </div>
}
