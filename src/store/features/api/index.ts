import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import { ISpecie, ITree } from './types';

export const treeNation = createApi({
	reducerPath: 'treeNation',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getTrees: builder.query<ITree[], unknown>({
			query: () => '/api/projects',
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

export default treeNation.reducer;
