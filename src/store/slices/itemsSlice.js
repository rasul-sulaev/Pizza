import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	items: [],
	isLoading: true,
}

export const itemsSlice = createSlice({
	name: 'itemsR',
	initialState,
	reducers: {

	}
});


export const {setIsLoading} = itemsSlice.actions;
export default itemsSlice.reducer;