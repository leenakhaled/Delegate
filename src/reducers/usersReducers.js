

const initialState = {
    users: [],
    loading: true

};

export default (state = initialState, { type, payload }) => {

    switch (type) {

        case "FETCH_DATA": {
            console.log('payload', payload)
            console.log('payload', typeof payload)
            state = { ...state, users: payload, loading: false };
            return state;
        }
        case "ADD_TO_FAVORITES": {
            const { users } = state;
            const newUsers = users.map((user) => {
                if (user.user.id === payload) {
                    user.isFav = true
                }

                return user
            })
            const result = { ...state, users: newUsers }
            console.log('result,', result)
            localStorage.setItem("users", JSON.stringify(newUsers))

            return result
        }
        case "REMOVE_FROM_FAVORITES": {
            const { users } = state;
            const newUsers = users.map((user) => {
                if (user.user.id === payload) {
                    user.isFav = false
                }

                return user
            })
            const result = { ...state, users: newUsers }
            localStorage.setItem("users", JSON.stringify(newUsers))

            return result
        }



        default:
            return state;
    }

};