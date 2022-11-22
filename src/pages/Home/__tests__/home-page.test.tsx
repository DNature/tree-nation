import { screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import Home from '../';
import { handlers } from '../../../utils/mocks/handlers';
// We're using our own custom render function and not RTL's render.
import { render } from '../../../utils/test-utils';

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Home page integration tests', () => {
	it('renders loading state', async () => {
		render(<Home />);

		expect(screen.getByRole(/progressbar/i)).toBeInTheDocument();
	});
	it('fetches & receives list of trees', async () => {});
});
