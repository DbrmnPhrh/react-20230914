import classNames from "classnames";
import { useContext, useReducer } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { Button } from "../Button/component";
import { StarRating } from "../StarRating/component";

const DEFAULT_REVIEW_VALUES = {
  userName: "",
  reviewText: "",
  rating: 0,
};

const reducer = (state, action) => {
  switch (action?.type) {
    case 'setUserName':
      return {...state, userName: action.payload}
    case 'setReviewText':
      return {...state, reviewText: action.payload}
    case 'setRating':
      return {...state, rating: action.payload}
    case 'reset':
      return {...DEFAULT_REVIEW_VALUES}
    default:
      return state;
  }
}


export const ReviewEditor = ({onClick}) => {
  const {theme} = useContext(ThemeContext);
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_REVIEW_VALUES);
  const onRatingChange = (newRating) => dispatch({ type: 'setRating', payload: newRating });

  return (
		<table>
			<tbody>
				<tr>
					<td>Name: </td>
					<td>
						<input
							type='text'
              value={formValue.userName}
							onChange={event => {
								dispatch({ type: 'setUserName', payload: event.target.value })
							}}
						/>
					</td>
				</tr>
				<tr>
					<td>Text: </td>
					<td>
						<input
							type='text'
              value={formValue.reviewText}
							onChange={event => {
								dispatch({ type: 'setReviewText', payload: event.target.value })
							}}
						/>
					</td>
				</tr>
				<tr>
					<td>Rating: </td>
					<td>
            <div className={classNames('display-flex')}>
              <input
                type='number'
                value={formValue.rating}
                min={0}
                max={5}
                onChange={event => {
                  dispatch({ type: 'setRating', payload: +event.target.value })
                }}
              />
              <span className={classNames('margin-l-2')}><StarRating rating={formValue.rating} /></span>
            </div>
					</td>
				</tr>
        <tr>
          <td>
            <div className={classNames('margin-t-2')}>
              <Button title='Submit'
                      onClick={() => dispatch({ type: 'reset' })}
                      type="primary"
                      theme={theme}
              />
            </div>
          </td>
          <td></td>
        </tr>
			</tbody>
		</table>
  )
}
