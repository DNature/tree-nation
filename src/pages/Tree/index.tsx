import { Alert, Box, CircularProgress, Image } from '@nature-ui/core';
import { useParams } from 'react-router-dom';
import Chart from 'src/components/Chart';
import {
	useGetSpeciesQuery,
	useGetTreesByIdQuery,
} from 'src/store/features/api';
import Species from './components/Species';

export default function Tree() {
	const { treeId } = useParams();
	const {
		data: tree,
		isLoading,
		isError,
		error,
		isSuccess,
	} = useGetTreesByIdQuery(treeId as string);
	const species = useGetSpeciesQuery(treeId as string);

	if (isError || !isSuccess) {
		return <Alert title={'😭'}>{error as React.ReactNode}</Alert>;
	}

	if (isLoading) {
		return <CircularProgress isIndeterminate />;
	}

	return (
		<Box>
			<Box className='lg:flex p-4 border border-gray-200 rounded-lg overflow-hidden my-4'>
				<Box className='w-9/12'>
					<Image src={tree?.image} />
				</Box>
				<Box className='ml-6'>
					<h1>{tree?.name}</h1>
					<p>{tree?.description}</p>

					<p className='mt-4 font-semibold'>Location: {tree?.location}</p>
				</Box>
			</Box>
			<Chart data={species.data} />
			<Species species={species} />
		</Box>
	);
}
