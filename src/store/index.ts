import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { treeNation } from './features/api/index';
import counterReducer from './features/counter';
import messageReducer from './features/message';

export const store = configureStore({
	reducer: {
		[treeNation.reducerPath]: treeNation.reducer,
		counter: counterReducer,
		message: messageReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(treeNation.middleware),
});

declare global {
	export type AppDispatch = typeof store.dispatch;
	export type RootState = ReturnType<typeof store.getState>;
	export type AppThunk<ReturnType = void> = ThunkAction<
		ReturnType,
		RootState,
		unknown,
		Action<string>
	>;
}
