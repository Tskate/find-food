import {ReviewType} from "./reviewType";

export interface RestaurantType {
    id: number,
    status: any,
    name: string,
    type: string,
    address: AddressType,
    phoneNumber: string,
    workingHours: string,
    description: string,
    tags: TagType[],
    photos: PhotoType[],
    menu: PhotoType[],
    reviews: ReviewType[],

}

export interface AddressType {
    id: number,
    country: string,
    city: string,
    street: string,
    building: string
}

export interface TagType {
    id: number,
    title: string,
}

export interface PhotoType {
    id: number,
    link: string,
}