import file from '../../data/restaurants.json'
import {RestaurantType} from "../../types/restaurantType";

export interface RestaurantsState {
    restaurants: RestaurantType[]
}

const initialState:RestaurantsState = {
    restaurants: file.restaurants
}

export const RestaurantsReducer = (state = initialState, action:any) : RestaurantsState => {
    switch (action.type) {
        default :
            return state
    }
}