import { Review } from "../Review/component";

export const Reviews = ({reviews}) => (
    <div>
      <ul>
        {reviews.map(review => <li key={review.id}><Review review={review} /></li>)}
      </ul>
    </div>
)
