import { Button } from "../Button/component";

export const Tab = ({title, onClick, type}) => {
  return <Button
    children={title}
    onClick={onClick}
    type={type}
    size="medium"
  ></Button>
}
