// using `screen` because of a recent article by the creator of @test-library.
import { screen } from '@testing-library/react';
import { render } from 'src/utils/test-utils';
import { TreeCard } from '..';

// On a normal circumstance, I'd put this in a different file
const mockData = {
	description:
		'We work in the reforestation of native highland forests, which play a vital role in the water cycle. nThe native tree that grows at these heights is the Tabaquillo (Polylepis australis). They are the ones that allow the mountain to become a great reservoir of water.\r\nFrom here our purpose was born: To cover the mountains with forests again! We are producing and planting 100.000 tabaquillos this 2022 and we aim to scale up to 360.000 next year 2023',
	id: 510,
	lat: -31.491564,
	location: 'Argentina',
	long: -64.835419,
	name: 'Bosques de Agua',
	slug: 'bosques-de-agua',
	species_price_from: 0,
	status: 'inactive',
	url: 'https://tree-nation.com/projects/bosques-de-agua',
};

describe('Home page integration tests', () => {
	it('renders loading state', async () => {
		render(<TreeCard {...mockData} />);

		expect(screen.getByText(mockData.name)).toBeInTheDocument();
		expect(screen.getByTestId('description')).toBeInTheDocument();
	});
	it('fetches & receives list of trees', async () => {});
});
