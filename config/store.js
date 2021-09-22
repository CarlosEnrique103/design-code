import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		menu: menuReducer,
	},
});
