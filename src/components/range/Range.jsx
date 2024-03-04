import { useState } from 'react';

const Range = () => {
	const [rangeValue, setRangeValue] = useState(0);

	return (
		<>
			<h1>{rangeValue}</h1>
			<input
				type='range'
                min={0}
                max={10}
				value={rangeValue}
				onChange={event => handleRangeChange(event.target.value, setRangeValue)}
			/>
		</>
	);
};

const handleRangeChange = (value, setRangeValue) => {
	setRangeValue(value);
};

export default Range;
