import { useState } from 'react'
import { Layout } from '../../components/Layout/component'
import { RestaurantContainer } from '../../components/Restaurant/container'
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/container'

export const MainPage = () => {
	const [activeRestaurantId, setActiveRestaurantId] = useState();

	return (
		<Layout>
			{
				<RestaurantTabsContainer
					activeRestaurantId={activeRestaurantId}
					onTabClick={setActiveRestaurantId}
				/>
			}
			{activeRestaurantId && (
				<RestaurantContainer restaurantId={activeRestaurantId} />
			)}
		</Layout>
	)
}
