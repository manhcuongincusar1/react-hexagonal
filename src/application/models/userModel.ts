export interface UserModel{
    gender: string
    location: ILocation
    name: IName
    email: string
    dob: Dob
    registered: IRegistered
    login: ILogin
    phone: string
    cell: string
    id: IId
    picture: IPicture
    nat: string
}


interface Dob {
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

interface IName {
    title: string
    first: string
    last: string
}

interface ILocation {
    street: Street
    city: string
    state: string
    country: string
    postcode: number
    coordinates: Coordinates
    timezone: Timezone
}

interface Street {
    number: number
    name: string
}

interface Coordinates {
    latitude: string
    longitude: string
}

interface Timezone {
    offset: string
    description: string
}