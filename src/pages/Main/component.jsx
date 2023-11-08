import { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout/component'
import { RestaurantContainer } from '../../components/Restaurant/container'
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/container'
import { useGetRestaurantsQuery } from '../../services/api'

export const MainPage = () => {
	const [activeRestaurantId, setActiveRestaurantId] = useState();
	const {data: restaurants, isSuccess: isRestaurantsLoaded} = useGetRestaurantsQuery();

	useEffect(() => {
		restaurants && setActiveRestaurantId(restaurants[0].id);
	}, [restaurants]);

	return (
		<Layout>
			{
				<RestaurantTabsContainer
					isRestaurantsLoaded={isRestaurantsLoaded}
					restaurants={restaurants}
					activeRestaurantId={activeRestaurantId}
					onTabClick={setActiveRestaurantId}
				/>
			}
			{activeRestaurantId && <RestaurantContainer restaurantId={activeRestaurantId} restaurants={restaurants} />}
		</Layout>
	)
}
