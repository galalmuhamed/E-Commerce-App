import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './Redux/Reducers';
import Middleware from './Redux/Middlewares';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const store = createStore(Reducers, Middleware);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
