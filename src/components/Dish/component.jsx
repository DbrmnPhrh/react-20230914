import { Counter } from "../Counter/component";

export const Dish = ({dishName}) => <div>{dishName}: <Counter min={0} max={5}/></div>
