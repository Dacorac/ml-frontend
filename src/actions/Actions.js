import { SET_SEARCH_TERM } from "./../constants/action-types";

const setSearchTerm = (payload) => {
    return { type: SET_SEARCH_TERM, payload }
};

export default setSearchTerm;