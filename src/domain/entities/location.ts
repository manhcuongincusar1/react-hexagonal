export interface ILocation {
    street: IStreet
    city: string
    state: string
    country: string
    postcode: number
    coordinates: ICoordinates
    timezone: ITimezone
}

interface IStreet {
    number: number
    name: string
}

interface ICoordinates {
    latitude: string
    longitude: string
}

interface ITimezone {
    offset: string
    description: string
}