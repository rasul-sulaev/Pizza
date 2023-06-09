import {createSlice} from "@reduxjs/toolkit";
import categories from "../../data/categories.json";
import sort from "../../data/sort.json";

const initialState = {
	categories,
	selectedCategoryId: 1,

	sort,
	selectedOptionSort: sort[0],
	sortBy: sort[0].value,
	sortOrder: 'desc',

	searchValue: '',

	paginationCountPages: 0,
	paginationCurrentPage: 1,
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

			if (state.sortBy === action.payload.value) {
				state.sortOrder = state.sortOrder === 'desc' ? 'asc' : 'desc';
			} else {
				state.sortBy = action.payload.value;
				state.sortOrder = 'desc';
			}
		},
		setPaginationCountPages(state, action) {
			state.paginationCountPages = action.payload;
		},
		setPaginationCurrentPage(state, action) {
			state.paginationCurrentPage = action.payload;
		},
		setSearchValue(state, action) {
			console.log(action.payload)
			state.searchValue = action.payload;
		}
	}
});

export const {setSelectedCategoryId, setSort, setPaginationCountPages, setPaginationCurrentPage, setSearchValue} = filterSlice.actions;
export default filterSlice.reducer;
