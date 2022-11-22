import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';

import { ToastProvider } from '@nature-ui/core';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import treeNationReducer from '../store/features/api';
import { treeNation } from '../store/features/api/index';
import counterReducer, { initialCounterState } from '../store/features/counter';
import messageReducer, { initialMessageState } from '../store/features/message';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

const defaultState = {
	counter: initialCounterState,
	message: initialMessageState,
};

const customRender = (
	ui: ReactElement,
	{
		preloadedState = defaultState as any,
		store = configureStore({
			reducer: {
				treeNation: treeNationReducer,
				counter: counterReducer,
				message: messageReducer,
			},
			preloadedState: defaultState,
			middleware: (getDefaultMiddleware) =>
				getDefaultMiddleware().concat(treeNation.middleware),
		}),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<ToastProvider>{children}</ToastProvider>
				</BrowserRouter>
			</Provider>
		);
	};

	return {
		store,
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	};
};

export * from '@testing-library/react';
export { customRender as render };
