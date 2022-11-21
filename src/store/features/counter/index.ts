import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { REQUESTS_LIMIT_KEY, REQUEST_LIMIT } from '../constants';

export interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: REQUEST_LIMIT ? Number(REQUEST_LIMIT) : 50,
};

const setValue = (key, value) => window.localStorage.setItem(key, value);

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
			setValue(REQUESTS_LIMIT_KEY, String(state.value));
		},
		decrement: (state) => {
			state.value -= 1;
			setValue(REQUESTS_LIMIT_KEY, String(state.value));
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
			setValue(REQUESTS_LIMIT_KEY, String(state.value));
		},
		resetCounter: (state) => {
			state.value = 12;
			setValue(REQUESTS_LIMIT_KEY, String(state.value));
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, resetCounter } =
	counterSlice.actions;

export default counterSlice.reducer;
