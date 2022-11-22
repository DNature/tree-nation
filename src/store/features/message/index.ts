import { createSlice } from '@reduxjs/toolkit';

export interface MessageState {
	status: number | null;
	type: 'error' | 'warning';
	title: string | null;
	description: string | null;
	showMessage: boolean;
}

export const initialMessageState: MessageState = {
	showMessage: false,
	title: null,
	status: null,
	description: null,
	type: 'warning',
};

export const messageSlice = createSlice({
	name: 'message',
	initialState: initialMessageState,
	reducers: {
		setMessage: (state, action) => {
			state.showMessage = action.payload.showMessage;
			state.title = action.payload.title;
			state.status = action.payload.status;
			state.description = action.payload.description;
			state.type = action.payload.type;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
