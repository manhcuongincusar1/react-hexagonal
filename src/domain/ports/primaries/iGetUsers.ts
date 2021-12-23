export interface IGetUsers {
    execute(page?: number, results?: number): (dispatch: any) => Promise<void>
}