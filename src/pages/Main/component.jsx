import { useState } from "react"
import { restaurants } from "../../../constants/mock"
import { Button } from "../../components/Button/component"
import { RestCard } from "../../components/RestCard/component"

export const MainPage = () => {
    const [current, setCurrent] = useState(restaurants[0]);
    return <>
               {restaurants.map((rest, idx) => (
                 <Button key={rest.id} title={rest.name} onClick={() => setCurrent(restaurants[idx])}></Button>
               ))}
               <RestCard rest={current}></RestCard>
           </>
}
