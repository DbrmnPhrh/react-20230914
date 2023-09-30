import classNames from "classnames";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";

export const Restaurant = ({restaurant}) => {
    return <div className={classNames("margin-l-2")}>
             <h2>{restaurant.name}</h2>
             <Menu dishes={restaurant.menu}/>
             <Reviews reviews={restaurant.reviews}/>
           </div>
}
 