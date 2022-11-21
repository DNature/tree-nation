import { Box } from '@nature-ui/core';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { ISpecie } from 'src/store/features/api/types';

interface IChartProps {
	data?: ISpecie[];
}
const Chart: React.FC<IChartProps> = (props) => {
	return (
		<Box className='w-full h-[50vh]'>
			<ResponsiveContainer width='100%' height='100%'>
				<BarChart
					width={500}
					height={300}
					data={props.data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey='life_time_CO2' fill='#8884d8' />
					<Bar dataKey='price' fill='#82ca9d' />
				</BarChart>
			</ResponsiveContainer>
		</Box>
	);
};

export default Chart;
