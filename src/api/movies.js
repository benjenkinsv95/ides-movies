import apiUrl from '../apiConfig'
import axios from 'axios'

// a function to get all of the movies. it requires a user for their token
export const movieIndex = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/movies',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
