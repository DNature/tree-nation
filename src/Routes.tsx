import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Tree from './pages/Tree';
import Species from './pages/Tree/components/Species';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		// errorElement: TODO: Add error page
		children: [],
	},
	{
		path: '/trees/:treeId',
		element: <Tree />,
		children: [
			{
				path: '',
				element: <Species />,
			},
		],
	},
	{
		path: '/trees/:treeId/s',
		element: <Species />,
	},
]);

export default function Routes() {
	return <RouterProvider router={router} />;
}
