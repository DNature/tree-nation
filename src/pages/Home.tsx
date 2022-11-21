import { Alert, CircularProgress } from '@nature-ui/core';
import { useGetTreesQuery } from 'src/store/features/api';
import { TreeCard } from '../components/TreeCard';

export default function Home() {
	const {
		data: trees,
		isLoading,
		isError,
		error,
		isSuccess,
	} = useGetTreesQuery({});

	if (isError || !isSuccess) {
		return <Alert title={'😭'}>{error as React.ReactNode}</Alert>;
	}

	if (isLoading) {
		return <CircularProgress isIndeterminate />;
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
