import { Review } from "../Review/component";
import { ReviewEditor } from "../ReviewEditor/component";

export const Reviews = ({reviews}) => (
    <div>
      <ul>
        {reviews.map(review => <li key={review.id}><Review review={review} /></li>)}
      </ul>
      <ReviewEditor />
    </div>
)
