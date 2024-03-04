import Box from "./components/box/Box";
import Range from "./components/range/Range";
import Users from "./components/users/Users";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
	return (
		<>
			<GlobalStyles/>
			<Range/>
			<Box />
			<Users />
		</>
	);
};

export default App;
