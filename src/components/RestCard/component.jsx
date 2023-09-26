import { Counter } from "../Counter/component";

export const RestCard = (props) => {
    console.log(props);
    return <>
             <h2>{props.rest.name}</h2>
             <ul>{props.rest.menu.map(item => (
                  <li key={item.id}>{item.name}: <Counter /></li>
                ))}
             </ul>
             <ul>{props.rest.reviews.map(rev => (
                  <li key={rev.id}>{rev.user}: {rev.text}</li>
                ))}
             </ul>
           </>
}
