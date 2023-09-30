import { useState } from "react"
import { Button } from "../Button/component";
import classNames from "classnames";

export const Counter = ({min, max}) => {
    const [amount, setAmount] = useState(0);
    return <>
             <Button title='-' onClick={() => setAmount(amount - 1)} disabled={amount===min} type="secondary" form="round-corner" />
             <span className={classNames('margin-h-1')}>{amount}</span>
             <Button title='+' onClick={() => setAmount(amount + 1)} disabled={amount===max} type="secondary" form="round-corner" />
           </>
}
