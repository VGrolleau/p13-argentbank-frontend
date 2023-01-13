import { users } from "../services/MockedData";

const INITIAL_STATE = {
};

const EDIT_USERNAME = 'EDIT_USERNAME';

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case EDIT_USERNAME:
            return

        default:
            return state;
    }
}