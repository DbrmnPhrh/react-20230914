import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout } from '../../components/Layout/component'
import { RestaurantContainer } from '../../components/Restaurant/container'
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/container'
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors'
import { useGetUsersQuery } from '../../services/api'

export const MainPage = () => {
	const [activeRestaurantId, setActiveRestaurantId] = useState();
	const restaurantIds = useSelector(selectRestaurantIds);

	useEffect(() => {
		setActiveRestaurantId(restaurantIds[0]);
	}, [restaurantIds]);

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
