import { rest } from 'msw';

export const handlers = [
	rest.get('https://tree-nation.com/api/projects', (req, res, ctx) => {
		const response = res(ctx.status(200), ctx.json([]));
		return response;
	}),
];
