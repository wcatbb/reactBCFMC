import { ROLES } from "../../app/shared/ROLES";
import { OFFICERS } from "../../app/shared/OFFICERS";

export const selectDutiesByOfficerId = (arrayOfIds) => {
	const roles = OFFICERS
		.filter(officer => arrayOfIds.includes(officer.id))
		.flatMap(officer => officer.roleIds);

	const duties = ROLES
		.filter(role => roles.includes(role.id))
		.flatMap(role => role.duties);

	return [...new Set(duties)];
}