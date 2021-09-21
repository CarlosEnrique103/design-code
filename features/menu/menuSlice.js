import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	action: "",
};

const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		openMenu: (state) => {
			state.action = "openMenu";
		},
		closeMenu: (state) => {
			state.action = "closeMenu";
		},
	},
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
