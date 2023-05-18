import {configureStore} from "@reduxjs/toolkit";
import items from "./slices/itemsSlice";
import filter from "./slices/filterSlice";

export const store = configureStore({
	reducer: {
		items,
		filter
	}
});