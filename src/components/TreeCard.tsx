import { Box } from '@nature-ui/core';
import { Link } from 'react-router-dom';
import { ITree } from 'src/store/features/api/types';

export const TreeCard: React.FC<ITree> = (props) => {
	const { name, description, id } = props;

	return (
		<Link to={`trees/${id}`}>
			<Box className='p-4 border border-gray-200 rounded-lg overflow-hidden my-4 hover:shadow-lg transition-shadow duration-500 ease-in-out'>
				<h1>{name}</h1>
				<p>{description}</p>
			</Box>
		</Link>
	);
};
