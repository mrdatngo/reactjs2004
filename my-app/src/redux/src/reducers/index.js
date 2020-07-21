import { INCREASE, INCREASE_ASYNC } from '../constants/ActionsType';
import { combineReducers } from 'redux'
const initialState = {
    value: 0,
};

function counterReducer(state = initialState, action) {
    console.log("Action: ", action);
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                value: state.value + 1,
            };
        case INCREASE_ASYNC:
            return {
                ...state,
                value: state.value + action.step,
            };
        default:
            return state;
    }
}

const initialStateStudent = {
    mark: 0
}

function studentReducer(state=initialStateStudent, action) {
    switch(action.type) {
        case "INCREASE_MARK":
            return {
                ...state,
                mark: state.mark + 1
            }
        default:
            return state
    }
}

const reducersAll = combineReducers({ counter: counterReducer, student: studentReducer })

export default reducersAll;
