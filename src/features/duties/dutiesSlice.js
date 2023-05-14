import { ROLES } from "../../app/shared/ROLES";

export const selectDutiesByOfficerId = (officerId) => {
    return ROLES.find((role) => role.officerId[0] || role.officerId[1] === parseInt(officerId)).duties;
}

// retrieve a list of duties for all officerIds within an array [0,3,7] and returns ['duty 1', 'duty 2', ...]
// always takes an array

const retrieveListOfDutiesForOfficerIds = (officerIdArray) => {
    let result = [];
    // Look at roles that contain the officer ids in the parameter officerIdArray
    for (let role in ROLES) {
    // Combine duties from filtered roles
        console.log(role)
        if(Array.isArray(role.officerId)
    // return that list
 }

 selectDutiesByOfficerId(0)