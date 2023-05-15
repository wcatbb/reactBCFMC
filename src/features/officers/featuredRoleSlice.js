import { ROLES } from "../../app/shared/ROLES";

export const selectFeaturedRole = (featuredRoleId) => {
	return ROLES.find((role) => role.id === parseInt(featuredRoleId)).title;
}