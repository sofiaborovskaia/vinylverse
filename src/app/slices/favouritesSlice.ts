import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Reducers
export const favouritesReducer = createSlice({
	name: "favourites",
	initialState: { items: [] },
	reducers: {
		updateFavourites: (state, action) => {
			state.items = action.payload;
		},
	},
});

export const { updateFavourites } = favouritesReducer.actions;

// Selectors
export const selectSearchState = (state: RootState) => state.favourites;

export default favouritesReducer.reducer;
