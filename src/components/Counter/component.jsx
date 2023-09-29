import { useState } from "react"
import { Button } from "../Button/component";

export const Counter = ({min, max}) => {
    const [amount, setAmount] = useState(0);
    return <>
             <Button title='-' onClick={() => setAmount(amount - 1)} disabled={amount===min}/>
             {amount}
             <Button title='+' onClick={() => setAmount(amount + 1)} disabled={amount===max}/>
           </>
}
