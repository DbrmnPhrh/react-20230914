import { useState } from "react"
import { Button } from "../Button/component";

export const Counter = (props) => {
    const [amount, setAmount] = useState(0);
    const min = 0;
    const max = 5;
    return <>
             <Button title='-' onClick={() => setAmount(amount - 1)} disabled={amount===min}/>
             {amount}
             <Button title='+' onClick={() => setAmount(amount + 1)} disabled={amount===max}/>
           </>
}
