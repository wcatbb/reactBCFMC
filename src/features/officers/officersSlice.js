import { OFFICERS } from "../../app/shared/OFFICERS";

export const selectAllOfficers = () => {
    return OFFICERS;
};

export const selectOfficerById = (id) => {
    return OFFICERS.find((officer) => officer.id === parseInt(id));
};