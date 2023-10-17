import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout } from '../../components/Layout/component'
import { Restaurant } from '../../components/Restaurant/component'
import { RestaurantTabs } from '../../components/RestaurantTabs/component'
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors'

export const MainPage = () => {
	const restaurantIds = useSelector(state => selectRestaurantIds(state));
	const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

	return (
			<Layout>
				<RestaurantTabs
					onTabClick={setActiveRestaurantId}
					activeRestaurantId={activeRestaurantId}
				/>
				<Restaurant activeRestaurantId={activeRestaurantId} />
			</Layout>
	)
}
