import { useState } from 'react'
import { restaurants } from '../../../constants/mock'
import { Layout } from '../../components/Layout/component'
import { Restaurant } from '../../components/Restaurant/component'
import { RestaurantTabs } from '../../components/RestaurantTabs/component'

export const MainPage = () => {
	const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
	// const restaurantIds = useSelector(state => state.restaurant.ids);
	return (
			<Layout>
				<RestaurantTabs
					restaurants={restaurants}
					onTabClick={setActiveRestaurantIndex}
					activeRestaurantIndex={activeRestaurantIndex}
				/>
				<Restaurant restaurant={restaurants[activeRestaurantIndex]} />
			</Layout>
	)
}
