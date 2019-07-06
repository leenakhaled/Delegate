import axios from 'axios'



class Api {

    getUsers = () => {
        return axios
            .get('https://app.fakejson.com/q', { mode: 'no-cors' })
            .then(function (response) {
                if (response.status === 200 && response != null) {
                    console.log(response.data +"******************************")

                    var data = response.data
                    return data
                } else {
                    throw new Error('Empty data')
                }
            })
            .catch(function (error) {
                console.log(error)
                return [] // Return empty array in case error response.
            })
    }
}

export default Api;




