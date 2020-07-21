// import { INCREASE, INCREASE_ASYNC } from '../constants/ActionsType';
import * as action from '../constants/ActionsType'
import apis from '../apis'

export const increase = () => (dispatch) => {
    dispatch({ type: action.INCREASE })
}

export const increaseAsync = () => (dispatch) => {
    apis.fetchCounter().then((resp) => {
        dispatch({ type: action.INCREASE_ASYNC, step: resp.data.step })
    })
}