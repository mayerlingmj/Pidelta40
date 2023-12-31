import axios from 'axios'

export const BASE_URL = 'http://localhost:7002'

const api = axios.create({ baseURL: BASE_URL })

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default api
