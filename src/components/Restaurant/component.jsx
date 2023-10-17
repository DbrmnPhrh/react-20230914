import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors'
import { Menu } from '../Menu/component'
import { Reviews } from '../Reviews/component'

export const Restaurant = ({ activeRestaurantId }) => {
	const restaurant = useSelector(state => selectRestaurantById(state, activeRestaurantId));

	return (
		<div className={classNames('margin-l-2')}>
			<h2>{restaurant.name}</h2>
			<Menu dishIds={restaurant.menu} />
			<Reviews reviewIds={restaurant.reviews} />
		</div>
	)
}
