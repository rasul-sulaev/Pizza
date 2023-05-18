import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategoryItems = createAsyncThunk(
	'items/fetchCategoryItems',
	async (APIQuery) => {
		try {
			const res = await axios.get(APIQuery);
			if (res.status === 200) {
				return res.data;
			}
		} catch (error) {
			throw new Error('Ошибка при поступлении постов (API хост некорректен)');
		}
	}
)

export const fetchItemsByParams = createAsyncThunk(
	'items/fetchItemsByParams',
	async (APIQuery) => {
		try {
			const res = await axios.get(APIQuery);
			if (res.status === 200) {
				return res.data;
			}
		} catch (error) {
			throw new Error('Ошибка при поступлении постов (API хост некорректен)');
		}
	}
)

const itemsSlice = createSlice({
	name: 'items',
	initialState: {
		data: [],
		dataByParameters: [],
		status: 'pending',
		error: null,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCategoryItems.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchCategoryItems.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(fetchCategoryItems.rejected, (state, action) => {
				state.error = action.error;
				state.status = 'rejected';
			})


			.addCase(fetchItemsByParams.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchItemsByParams.fulfilled, (state, action) => {
				state.dataByParameters = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(fetchItemsByParams.rejected, (state, action) => {
				state.status = 'rejected';
			})
	}
});


export const {setIsLoading} = itemsSlice.actions;
export default itemsSlice.reducer;