import classNames from 'classnames';
import { RestaurantTabContainer } from '../RestaurantTab/container';

export const RestaurantTabs = ({
	onTabClick,
	activeRestaurantId,
	restaurantIds,
}) => {
	return (
		<div className={classNames('display-flex', 'margin-t-3')}>
			{restaurantIds.length > 0 &&
				restaurantIds.map((id, idx) => (
					<div key={idx + 1} className={classNames('margin-l-2')}>
						<RestaurantTabContainer
							restaurantId={id}
							onClick={() => onTabClick(id)}
							isActive={id === activeRestaurantId}
						/>
					</div>
				))}
		</div>
	)
}
