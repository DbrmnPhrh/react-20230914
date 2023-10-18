import classNames from 'classnames';
import { MenuContainer } from '../Menu/container';
import { Reviews } from '../Reviews/component';

export const Restaurant = ({ restaurant }) => {
	return (
		restaurant
      ? <div className={classNames('margin-l-2')}>
        <h2>{restaurant.name}</h2>
        <MenuContainer restaurantId={restaurant.id} />
        <Reviews restaurantId={restaurant.id}/>
      </div>
      : null
	)
}
