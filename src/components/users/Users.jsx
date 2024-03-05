import { useState } from 'react';
import { USERS } from '../../constants/users';

const Users = () => {
	const [userCounter, setUserCounter] = useState(0);
	const currentUser = USERS[userCounter];
	const isFirstUser = userCounter === 0;
	const isLasttUser = userCounter === USERS.length - 1;

	return (
		<>
			<img src={currentUser.profileImage} alt='user image' />
			<h2>Name: {currentUser.name}</h2>
			<p>Username: {currentUser.username}</p>
			<p>Email: {currentUser.email}</p>
			<button
				disabled={isFirstUser}
				onClick={() => previousUser(userCounter, setUserCounter)}
			>
				Previous
			</button>
			<button
				disabled={isLasttUser}
				onClick={() => nextUser(userCounter, setUserCounter)}
			>
				Next
			</button>
		</>
	);
};

const nextUser = (userCounter, setUserCounter) => {
	setUserCounter(userCounter + 1);
};
const previousUser = (userCounter, setUserCounter) => {
	setUserCounter(userCounter - 1);
};

export default Users;
