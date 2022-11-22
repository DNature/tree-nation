import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import Tree from './pages/Tree';
import Species from './pages/Tree/components/Species';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/trees/:treeId',
		element: <Tree />,
	},
	{
		path: '/trees/:treeId/s',
		element: <Species />,
	},
]);

export default function Routes() {
	return <RouterProvider router={router} />;
}
