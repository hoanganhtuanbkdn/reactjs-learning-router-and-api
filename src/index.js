import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './pages/List';
import Create from './pages/Create';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Detail from './pages/Detail';
import Update from './pages/Update';

const router = createBrowserRouter([
	{
		path: '/',
		element: <List />,
	},

	{
		path: '/create',
		element: <Create />,
	},
	{
		path: '/detail/:id',
		element: <Detail />,
	},
	{
		path: '/update/:id',
		element: <Update />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
