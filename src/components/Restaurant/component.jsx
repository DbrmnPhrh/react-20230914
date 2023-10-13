import classNames from "classnames";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";

export const Restaurant = ({restaurant}) => (
  <div className={classNames("margin-l-2")}>
    <h2>{restaurant.name}</h2>
    <Menu/>
    <Reviews/>
  </div>
)
