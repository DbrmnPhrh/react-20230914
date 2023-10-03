import { Button } from "../Button/component"

export const Tab = ({title, onClick, index, activeRestaurantIndex}) => (
  <Button
    title={title}
    onClick={onClick}
    type={index === activeRestaurantIndex ? "active" : "primary"}
    size="medium"
  ></Button>
)
