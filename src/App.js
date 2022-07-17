import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { handleIntialData } from './Redux/Actions/Shared';
import { useDispatch } from 'react-redux';
import GlobalStyle from './Components/Styles/Global.styled';
import { AppContainer } from './Components/Styles/App.styled';
import Home from './Pages/Home';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import SmartPhones from './Pages/SmartPhones';
import SmartWatches from './Pages/SmartWatches';
import Laptops from './Pages/Laptops';
import SmartPhonesApple from './Pages/SmartPhonesSub/SmartPhonesApple';
import SmartPhonesSamsung from './Pages/SmartPhonesSub/SmartPhoneSamsung';
import SmartPhonesHuawei from './Pages/SmartPhonesSub/SmartPhonesHuawei';
import LaptopApple from './Pages/Laptopssub/LaptopApple';
import LaptopSamsung from './Pages/Laptopssub/LaptopSamsung';
import LaptopHuawei from './Pages/Laptopssub/LaptopHuawei';
import SmartWatchApple from './Pages/SmartWatchsub/SmartWatchApple';
import SmartWatchSamsung from './Pages/SmartWatchsub/SmartWatchSamsung';
import SmartWatchHuawei from './Pages/SmartWatchsub/SmartWatchHuawei';
import ProductPage from './Pages/ProductPage';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart';
import LoginPage from './Pages/LoginPage';
import SearchPage from './Pages/SearchPage';
import { useSelector } from 'react-redux';

const App = () => {
	const ref = useRef();
	const location = useLocation();
	const dispatch = useDispatch();
	const authedUser = useSelector(state => state.AuthedUser);
	// to intial data
	useEffect(() => {
		dispatch(handleIntialData());
	}, []);

	//menu is open
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	// to close Sidebar
	useEffect(() => {
		const prevState = (ref.current = location.pathname);
		if (prevState !== location.pathname) {
		} else {
			setMenuIsOpen(false);
		}
	}, [location.pathname]);
	// to switch between cart wishlist from nav
	const [cart, setCart] = useState('cart');
	//to switch between register sign in from nav
	const [login, setLogin] = useState('signUp');

	return (
		<AppContainer>
			<GlobalStyle />
			{location.pathname === '/login' ? null : (
				<>
					<Header
						menuIsOpen={menuIsOpen}
						setMenuIsOpen={setMenuIsOpen}
						setCart={setCart}
						setLogin={setLogin}
					/>
					<SideBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
				</>
			)}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/smartphone" element={<SmartPhones />} />
				<Route path="/smartphone/apple" element={<SmartPhonesApple />} />
				<Route path="/smartphone/samsung" element={<SmartPhonesSamsung />} />
				<Route path="/smartphone/huawei" element={<SmartPhonesHuawei />} />
				<Route path="/laptop" element={<Laptops />} />
				<Route path="/laptop/apple" element={<LaptopApple />} />
				<Route path="/laptop/samsung" element={<LaptopSamsung />} />
				<Route path="/laptop/huawei" element={<LaptopHuawei />} />
				<Route path="/smartwatch" element={<SmartWatches />} />
				<Route path="/smartwatch/apple" element={<SmartWatchApple />} />
				<Route path="/smartwatch/samsung" element={<SmartWatchSamsung />} />
				<Route path="/smartwatch/huawei" element={<SmartWatchHuawei />} />
				<Route path="/:id" element={<ProductPage />} />
				<Route path="/notfound" element={<NotFound />} />
				<Route path="/search/:PID" element={<SearchPage />} />
				<Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
				{!authedUser && (
					<Route
						path="login"
						element={<LoginPage login={login} setLogin={setLogin} />}
					/>
				)}

				<Route path="*" element={<NotFound />} />
			</Routes>
		</AppContainer>
	);
};

export default App;
