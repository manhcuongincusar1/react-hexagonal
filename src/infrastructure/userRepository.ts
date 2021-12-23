import { IResponseUsers } from "../domain/entities";
import { IUserRepository } from "../domain/ports/secondaries/iUserRepository";

export class UserRepository implements IUserRepository {
    page?: number 
    results?: number 
    constructor(page: number =1 , results: number = 10) {
        this.page = page
        this.results = results
    }
    async getUsers(): Promise<IResponseUsers> {
        let baseUrl: string = "https://randomuser.me/api/";
        let url:string 
        url =`${baseUrl}?page=${this.page}&results=${this.results}`
        const res = await fetch(url) 
        return res.json()
    }    
}