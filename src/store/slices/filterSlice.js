import {createSlice} from "@reduxjs/toolkit";
import categories from "../../data/categories.json";
import sort from "../../data/sort.json";

const initialState = {
	categories,
	selectedCategoryId: 1,

	sort,
	selectedOptionSort: sort[0],
	sortOrder: 'desc',

	searchValue: '',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSelectedCategoryId(state, action) {
			state.selectedCategoryId = action.payload;
		},
		setSort(state, action) {
			state.selectedOptionSort = action.payload;

			if (state.selectedOptionSort.value === action.payload.value) {
				state.sortOrder = state.sortOrder === 'desc' ? 'asc' : 'desc';
			} else {
				state.selectedOptionSort.value = action.payload.value;
				state.sortOrder = 'desc';
			}
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
		setFilters(state, action) {
			state.selectedCategoryId = action.payload.category_id;
			state.selectedOptionSort = action.payload.selectedOptionSort;
			state.sortOrder = action.payload.order;
			state.searchValue = action.payload.name;
		}
	}
});

export const {setSelectedCategoryId, setSort, setSearchValue, setFilters} = filterSlice.actions;
export default filterSlice.reducer;
