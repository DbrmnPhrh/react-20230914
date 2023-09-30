import { useState } from "react";
import { restaurants } from "../../../constants/mock";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { Restaurant } from "../../components/Restaurant/component";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import styles from "./styles.module.css";

export const MainPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(4);
    return <div>
               <Header
                 restaurantName={restaurants[activeRestaurantIndex].name}
                 position={styles.header}
               />
               <RestaurantTabs
                 restaurants={restaurants}
                 onTabClick={setActiveRestaurantIndex}
                 activeRestaurantIndex={activeRestaurantIndex}
               />
               <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
               <Footer position={styles.footer} />
           </div>
}
