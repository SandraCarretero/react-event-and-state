import { useState } from 'react';
import { USERS } from '../../constants/users';

const Users = () => {
	const [user, setUser] = useState(0);

	return (
		<>
			<img src={USERS[user].profileImage} alt='user image' />
			<h1>Name: {USERS[user].name}</h1>
			<p>Username: {USERS[user].username}</p>
			<p>Email: {USERS[user].email}</p>
			<button disabled={user === 0} onClick={() => previousUser(user, setUser)}>
				Previous
			</button>
			<button
				disabled={user === USERS.length - 1}
				onClick={() => nextUser(user, setUser)}
			>
				Next
			</button>
		</>
	);
};

const nextUser = (user, setUser) => {
	setUser(user + 1);
};
const previousUser = (user, setUser) => {
	setUser(user - 1);
};

export default Users;
