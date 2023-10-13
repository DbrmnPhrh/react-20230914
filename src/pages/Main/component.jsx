import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout } from '../../components/Layout/component'
import { Restaurant } from '../../components/Restaurant/component'
import { RestaurantTabs } from '../../components/RestaurantTabs/component'

export const MainPage = () => {
	const restaurantIds = useSelector(state => state.restaurant.ids);
	const restaurants = useSelector(state => state.restaurant.entities);
	const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

	return (
			<Layout>
				<RestaurantTabs
					onTabClick={setActiveRestaurantId}
					activeRestaurantId={activeRestaurantId}
				/>
				<Restaurant restaurant={restaurants[activeRestaurantId]} />
			</Layout>
	)
}
