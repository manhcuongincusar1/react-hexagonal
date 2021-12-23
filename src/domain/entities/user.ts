import { ILocation } from "./location";
import { IName } from "./Name";


export interface IUser{
    gender: string
    location: ILocation
    name: IName
    email: string
    dob: IDob
    registered: IRegistered
    login: ILogin
    phone: string
    cell: string
    id: IId
    picture: IPicture
    nat: string
}


interface IDob {
    date: string
    age: number
}

interface IRegistered {
    date: string
    age: number
}

interface IId {
    name : string
    value: unknown
}

interface IPicture {
    large: string
    medium: string
    thumbnail: string
}

interface ILogin {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
}