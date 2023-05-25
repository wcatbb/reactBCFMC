import { createSlice } from "@reduxjs/toolkit";
import { ROLES } from "../../app/shared/ROLES";
import { OFFICERS } from "../../app/shared/OFFICERS";

const initialState = {
	officersArray: OFFICERS,
	rolesArray: ROLES
};

const dutiesSlice = createSlice({
	name: 'duties',
	initialState
});

export const dutiesReducer = dutiesSlice.reducer;

export const selectDutiesByOfficerId = (arrayOfIds) => (state) => {
	const roles = state.duties.officersArray
		.filter(officer => arrayOfIds.includes(officer.id))
		.flatMap(officer => officer.roleIds);

	const duties = state.duties.rolesArray
		.filter(role => roles.includes(role.id))
		.flatMap(role => role.duties);

	return [...new Set(duties)];
};
