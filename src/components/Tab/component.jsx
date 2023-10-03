import { Button } from "../Button/component";

export const Tab = ({title, onClick, index, activeRestaurantIndex, theme}) => {
  return <Button
    title={title}
    onClick={onClick}
    type={index === activeRestaurantIndex ? "active" : "primary"}
    size="medium"
    theme={theme}
  ></Button>
}
