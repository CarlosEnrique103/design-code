import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const source = axios.CancelToken.source();

const initialState = {
	loading: "idle",
	info: {
		email: "user@test.com",
		name: "user",
		photo:
			"https://uc1556a20973d2598081e659beab.dl.dropboxusercontent.com/cd/0/inline/BWowzmY8ykpPG2XUrfZXTklLsX0UxJOYZJ61FPE2nzHH2UFzL28VQaPpmkvDMaIeZgBWKhIsrmcoVIfdBfl0RmDcHKx1HqjgKoMwDu8zFmj5QvSeMEI1liHIGGPvRtHWLsxfP5tNJ-iGnlALxeOQWJof/file#",
	},
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
	try {
		const response = await axios.get(
			"https://fakerapi.it/api/v1/persons?_quantity=1",
			{
				cancelToken: source.token,
			}
		);
		const photo = response.data.data[0].image;
		const firstname = response.data.data[0].firstname;
		const lastname = response.data.data[0].lastname;
		const email = response.data.data[0].email;
		return {
			email,
			name: `${firstname} ${lastname}.`,
			photo,
		};
	} catch (e) {
		if (!axios.isCancel(e)) {
			throw e;
		}
	}
});

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (buider) => {
		buider.addCase(fetchUser.fulfilled, (state, action) => {
			state.info = action.payload;
			state.loading = "success";
		});
		buider.addCase(fetchUser.rejected, (state, action) => {
			state.loading = "failed";
		});
	},
});

export default userSlice.reducer;
