import { IResponseUsers } from "../entities";
import { IGetUsers } from "../ports/primaries";
import { IUserRepository } from "../ports/secondaries/iUserRepository";
import { UserActionTypes } from "./types";

export class GetUsers implements IGetUsers {
    private _userRepository: IUserRepository
    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository
    }
    execute(page?: number, results?: number): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL} = UserActionTypes

            dispatch({
                type: GET_USERS_REQUEST
            })
            try {
                const users: IResponseUsers = await this._userRepository.getUsers(page, results)
                dispatch({
                    type: GET_USERS_SUCCESS,
                    payload: users.results
                })
            } catch (e) {
                dispatch({
                    type: GET_USERS_FAIL,
                    e
                })
            }
        }
    }
}