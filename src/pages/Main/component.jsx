import { useState } from "react";
import { restaurants } from "../../../constants/mock";
import { Footer } from "../../components/Footer/component";
import { Header } from "../../components/Header/component";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { ThemeProvider } from "../../contexts/Theme";
import styles from "./styles.module.css";

export const MainPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    return (
			<ThemeProvider>
				<div>
					<Header
						restaurantName={restaurants[activeRestaurantIndex].name}
						className={styles.header}
					/>
					<RestaurantTabs
						restaurants={restaurants}
						onTabClick={setActiveRestaurantIndex}
						activeRestaurantIndex={activeRestaurantIndex}
					/>
					<Restaurant restaurant={restaurants[activeRestaurantIndex]} />
					<Footer className={styles.footer} />
				</div>
			</ThemeProvider>
		)
}
