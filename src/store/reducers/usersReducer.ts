interface UsersState {
    users: any[]
}

const initialState = {
    users: []
}
export const UsersReducer = (state = initialState, action:any): UsersState => {
    switch (action.type) {
        default:
            return state
    }
}