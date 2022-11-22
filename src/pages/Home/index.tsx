import { Box, CircularProgress } from '@nature-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTreesQuery } from 'src/store/features/api';
import { errorMessage, getWarningMessage } from 'src/store/features/constants';
import { decrement } from 'src/store/features/counter';
import { setMessage } from 'src/store/features/message';
import { TreeCard } from '../../components/TreeCard';

export default function Home() {
	const dispatch = useDispatch();
	const counter = useSelector((state: RootState) => state.counter);

	const { data: trees, isLoading, isError } = useGetTreesQuery({});

	useEffect(() => {
		if (counter.value <= 12) {
			dispatch(setMessage(getWarningMessage(counter.value)));
		}

		// Decrement counter on page load
		dispatch(decrement());
	}, []);

	if (isError) {
		dispatch(setMessage(errorMessage));
		return <p>Opps, Something went wrong</p>;
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
			<h1 className='text-4xl font-bold mt-12'>Tree nation</h1>
			{trees?.map((tree) => (
				<TreeCard key={tree.id} {...tree} />
			))}
		</>
	);
}
