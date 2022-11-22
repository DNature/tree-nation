import { createSlice } from '@reduxjs/toolkit';
import { REQUESTS_LIMIT_KEY, REQUEST_LIMIT } from '../constants';

export interface CounterState {
	value: number;
}

export const initialCounterState: CounterState = {
	value: REQUEST_LIMIT ? Number(REQUEST_LIMIT) : 50,
};

const setValue = (key, value) => window.localStorage.setItem(key, value);

export const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		decrement: (state) => {
			state.value -= 1;
			setValue(REQUESTS_LIMIT_KEY, String(state.value));
		},
		resetCount: (state) => {
			state.value = 12;
			setValue(REQUESTS_LIMIT_KEY, String(state.value));
		},
		setCount: (state, action) => {
			state.value = action.payload;
			setValue(REQUESTS_LIMIT_KEY, String(state.value));
		},
	},
});

// Action creators are generated for each case reducer function
export const { decrement, resetCount, setCount } = counterSlice.actions;

export default counterSlice.reducer;
