import { createSlice } from "@reduxjs/toolkit";
import { OFFICERS } from "../../app/shared/OFFICERS";

const initialState = {
    officersArray: OFFICERS
}

const officersSlice = createSlice({
    name: 'officers',
    initialState
});

export const officersReducer = officersSlice.reducer;

export const selectAllOfficers = (state) => {
    return state.officers.officersArray;
};

export const selectOfficerById = (id) => (state) => {
    return state.officers.officersArray
        .find((officer) => officer.id === parseInt(id));
};