import {combineReducers} from "redux";
import {RestaurantsReducer} from "./restaurantsReducer";
import {UsersReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    "restaurants" : RestaurantsReducer,
    "users" : UsersReducer
})