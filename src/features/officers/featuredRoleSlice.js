import { createSlice } from "@reduxjs/toolkit";
import { ROLES } from "../../app/shared/ROLES";

const initialState = {
	rolesArray: ROLES
}

const featuredRoleSlice = createSlice({
	name: 'featuredRole',
	initialState
});

export const featuredRoleReducer = featuredRoleSlice.reducer;

export const selectFeaturedRole = (featuredRoleId) => (state) => {
	return state.featuredRole.rolesArray
		.find((role) => role.id === parseInt(featuredRoleId)).title;
}