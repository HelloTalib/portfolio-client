import axios from 'axios'

// `http://localhost:80`

export default() => {
  return axios.create({
    baseURL: `http://jaredbookr.io`
  })
}
