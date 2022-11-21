import { Alert, Box, CircularProgress } from '@nature-ui/core';
import { ISpecie } from 'src/store/features/api/types';

export default function Species(props) {
	const { species } = props;
	if (species.isError) {
		return <Alert title={'😭'}>{species.error as React.ReactNode}</Alert>;
	}

	if (species.isLoading) {
		return <CircularProgress isIndeterminate />;
	}

	return (
		<Box>
			<h2 className='font-semibold text-3xl mt-8 text-blue-700'>
				Species List
			</h2>
			{species?.data?.map((specie: ISpecie) => (
				<Box
					key={specie.id}
					className='p-4 border border-gray-200 rounded-lg overflow-hidden my-4'
				>
					<h1>{specie?.name}</h1>

					<p className='mt-4 font-semibold'>
						Lifetime CO2: {specie?.life_time_CO2}
					</p>
				</Box>
			))}
		</Box>
	);
}
