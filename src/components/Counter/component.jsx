import classNames from 'classnames'
import { useState } from 'react'
import { Button } from '../Button/component'

export const Counter = ({ min, max, initialAmount }) => {
	const [amount, setAmount] = useState(initialAmount ?? 0)

	return (
		<>
			<Button
				children='-'
				onClick={() => setAmount(amount - 1)}
				disabled={amount === min}
				type='secondary'
				form='round-corner'
			/>
			<span className={classNames('margin-h-1')}>{amount}</span>
			<Button
				children='+'
				onClick={() => setAmount(amount + 1)}
				disabled={amount === max}
				type='secondary'
				form='round-corner'
			/>
		</>
	)
}
