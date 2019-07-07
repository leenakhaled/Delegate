import axios from 'axios'
export function addToFavorite(userId) {
    return {
        type: "ADD_TO_FAVORITES",
        payload: userId
    }
}

export function removeFromFavorite(id) {
    return {
        type: "REMOVE_FROM_FAVORITES",
        payload: id
    }
}

export function fetchData(items) {
    return {
        type: "FETCH_DATA",
        payload: items
    }
}

export const fetchUsers = () => dispatch => {
    const users = localStorage.getItem("users")
    if (users) {
        console.log("", "from storge")
        dispatch(fetchData(JSON.parse(users)))

    } else {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                const items = []
                response.data.map((val, index) => {
                    const obj = {
                        user: val,
                        isFav: false
                    }
                    items.push(obj)
                })
                localStorage.setItem("users", JSON.stringify(items))
                dispatch(fetchData(items))
            })
            .catch(err => {
                console.log(err);

            });
    }

};

export const addToFavoriteAction = (userId) => dispatch => {
    dispatch(addToFavorite(userId))
};
export const removeFromFavoriteAction = (userId) => dispatch => {
    dispatch(removeFromFavorite(userId))
};