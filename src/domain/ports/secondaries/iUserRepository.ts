import { IResponseUsers } from "../../entities";

export interface IUserRepository {
    page ?: number
    results?: number
    getUsers(page?:number, results?:number): Promise<IResponseUsers>
}