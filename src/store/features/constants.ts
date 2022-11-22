export const BASE_URL = 'https://tree-nation.com'; // This should be added to a dotenv file.
export const REQUESTS_LIMIT_KEY = 'request_limit';
export const REQUEST_LIMIT = window.localStorage.getItem(REQUESTS_LIMIT_KEY);
export const errorMessage = {
	description: 'something went wrong.',
	title: 'Opps 😭',
	showMessage: true,
	status: 404,
	type: 'error',
};
export const getWarningMessage = (count: number) => ({
	title: 'Limit approaching',
	showMessage: true,
	description: `Request limit approaching. Currently at ${count - 1}.`,
	status: 'warning',
});
