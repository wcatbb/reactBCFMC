import { ROLES } from "../../app/shared/ROLES";

export const selectDutiesByOfficerId = (officerId) => {
    if (Array.isArray(officerId)) {
    return ROLES.filter((role) => role.officerId[0] === parseInt(officerId[0]));
    };
    return ROLES.filter((role) => role.officerId === parseInt(officerId));
}