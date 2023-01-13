import {AddressType} from "../types/restaurantType";

export  const formAddress = (address: AddressType): string => {
    return `${address.city}, ${address.street} ${address.building} `
}