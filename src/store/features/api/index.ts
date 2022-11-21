import {
	createApi,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import { decrement, resetCounter } from '../counter';
import { setMessage } from '../message';
import { ISpecie, ITree } from './types';

export const treeNation = createApi({
	reducerPath: 'treeNation',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getTrees: builder.query<ITree[], unknown>({
			// query: () => '/api/projects',
			queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBQ) => {
				const { counter } = _queryApi.getState() as RootState;

				if (counter.value <= 12) {
					_queryApi.dispatch(
						setMessage({
							title: 'Limit approaching',
							status: null,
							showMessage: true,
							description: `Request limit approaching. Currently at ${
								counter.value - 1
							}.`,
							type: 'warning',
						})
					);
				}
				if (counter.value < 1) {
					_queryApi.dispatch(
						setMessage({
							title: 'Limit reached',
							status: 429,
							showMessage: true,
							description:
								'Request limit reached. Please refresh page to reset limit.',
							type: 'error',
						})
					);
					_queryApi.dispatch(resetCounter());
				} else {
					_queryApi.dispatch(decrement());
				}
				const data = await fetchWithBQ('/api/projects');

				//

				return data.data
					? { data: data.data as ITree[] }
					: { error: data.error as FetchBaseQueryError };
			},
		}),
		getTreesById: builder.query<ITree, string>({
			query: (id: string) => `/api/projects/${id}`,
		}),

		// This is supposed to be handled in a separate file
		getSpecies: builder.query<ISpecie[], unknown>({
			query: (id: string) => `/api/projects/${id}/species`,
		}),
	}),
});

export const { useGetTreesByIdQuery, useGetTreesQuery, useGetSpeciesQuery } =
	treeNation;
