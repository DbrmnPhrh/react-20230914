import { useState } from "react"
import { restaurants } from "../../../constants/mock"
import { RestaurantTabs } from "../../components/RestaurantTabs/component"
import { Restaurant } from "../../components/Restaurant/component";

export const MainPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    return <div>
               <RestaurantTabs
                 restaurants={restaurants}
                 onTabClick={setActiveRestaurantIndex}
               />
               <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
           </div>
}
