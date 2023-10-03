import classNames from "classnames";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { Button } from "../Button/component";

export const Counter = ({min, max, initialAmount, onAmountChange}) => {
    const [amount, setAmount] = useState((initialAmount ?? 0));
    const {theme} = useContext(ThemeContext);

    return <>
             <Button title='-' onClick={() => {
                                 setAmount(amount - 1);
                                 if (onAmountChange) {
                                  onAmountChange(amount - 1);
                                 }
                               }}
                               disabled={amount===min}
                               type="secondary"
                               form="round-corner"
                               theme={theme}
             />
             <span className={classNames('margin-h-1')}>{amount}</span>
             <Button title='+' onClick={() => {
                                 setAmount(amount + 1);
                                 if (onAmountChange) {
                                  onAmountChange(amount + 1);
                                 }
                               }}
                               disabled={amount===max}
                               type="secondary"
                               form="round-corner"
                               theme={theme}
             />
           </>
}
