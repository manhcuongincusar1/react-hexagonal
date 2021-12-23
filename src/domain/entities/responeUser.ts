import {IInfo} from "./info"
import {IUser} from "./user"
export interface IResponseUsers {
    results: IUser[]
    info: IInfo
}