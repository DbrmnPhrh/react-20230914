import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout } from '../../components/Layout/component'
import { Restaurant } from '../../components/Restaurant/component'
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/container'
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors'
import { RestaurantContainer } from '../../components/Restaurant/container'

export const MainPage = () => {
	const restaurantIds = useSelector(state => selectRestaurantIds(state));
	const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

	return (
			<Layout>
				<RestaurantTabsContainer
					activeRestaurantId={activeRestaurantId}
					onTabClick={setActiveRestaurantId}
				/>
				{activeRestaurantId && <RestaurantContainer restaurantId={activeRestaurantId}/>}
			</Layout>
	)
}
