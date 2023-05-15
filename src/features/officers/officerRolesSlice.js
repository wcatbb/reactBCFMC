import { ROLES } from "../../app/shared/ROLES";
import { OFFICERS } from "../../app/shared/OFFICERS";

export const selectRolesByRolesId = (rolesArray) => {
	const roles = OFFICERS
		.filter(officer => rolesArray.includes(officer.id))
		.flatMap(officer => officer.roleIds);

	const officerTitles = ROLES
		.filter(role => roles.includes(role.id))
		.flatMap(role => role.title);

	return [...new Set(officerTitles)];
}