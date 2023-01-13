import file from '../../data/restaurants.json'
import {RestaurantType} from "../../types/restaurantType";

export interface RestaurantState {
    restaurants: RestaurantType[]
}

const initialState:RestaurantState = {
    restaurants: file.restaurants
}

export const RestaurantsReducer = (state = initialState, action:any) : RestaurantState => {
    switch (action.type) {
        default :
            return state
    }
}