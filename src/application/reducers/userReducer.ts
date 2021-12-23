import { UserActionTypes } from "../../domain/use-cases/types"

// @ts-ignore
const initialState = {
    users: [],
}

export const userReducer = (state = initialState, action: { type: any, payload?: any }) => {
    const {GET_USERS_SUCCESS} = UserActionTypes

    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

