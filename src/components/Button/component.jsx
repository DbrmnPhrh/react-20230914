export const Button = ({title, onClick, disabled}) => <button disabled={disabled} onClick={() => onClick()}>{title}</button>
