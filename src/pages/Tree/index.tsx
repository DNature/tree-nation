import { Box, CircularProgress, Image } from '@nature-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Chart from 'src/components/Chart';
import {
	useGetSpeciesQuery,
	useGetTreesByIdQuery,
} from 'src/store/features/api';
import { errorMessage, getWarningMessage } from 'src/store/features/constants';
import { decrement } from 'src/store/features/counter';
import { setMessage } from 'src/store/features/message';
import Species from './components/Species';

export default function Tree() {
	const { treeId } = useParams();
	const counter = useSelector((state: RootState) => state.counter);
	const dispatch = useDispatch();

	const {
		data: tree,
		isLoading,
		isError,
		error,
	} = useGetTreesByIdQuery(treeId as string);
	const species = useGetSpeciesQuery(treeId as string);

	useEffect(() => {
		if (counter.value <= 12) {
			dispatch(setMessage(getWarningMessage(counter.value)));
		}
		dispatch(decrement());
	}, []);

	if (isError) {
		console.error(error);
		dispatch(setMessage(errorMessage));
		return <>Opps, an error occured</>;
	}

	if (isLoading) {
		return (
			<Box className='flex justify-center mt-24'>
				<CircularProgress isIndeterminate />
			</Box>
		);
	}

	return (
		<>
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
			{species.data && (
				<>
					<Chart data={species.data} />
					<Species species={species} />
				</>
			)}
		</>
	);
}
