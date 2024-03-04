import { useState } from 'react';
import { StyledBox } from './box.styles';

const Box = () => {
	const [isOrange, setIsOrange] = useState(true);

	return (
		<>
			<StyledBox $isOrange={isOrange} />
			<button onClick={() => changeBoxColor(isOrange, setIsOrange)}>
				CHANGE COLOR
			</button>
		</>
	);
};

const changeBoxColor = (isOrange, setIsOrange) => {
	setIsOrange(!isOrange);
};

export default Box;
