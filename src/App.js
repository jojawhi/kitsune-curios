import { Routes, Route } from 'react-router-dom';
import Nav from './routes/nav/nav.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Nav />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<h1>I am the shop</h1>} />
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
