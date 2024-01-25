import axios from 'axios'

const validateNetworkError = (error: any) => {
  if (error && error.message === 'Network Error') {
    throw new Error('¡Ups! Algo salió mal. Intente mas tarde.')
  }
  throw error
}

const api = axios.create({
  baseURL: 'https://api.culqi.com/v2',
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
})

api.interceptors.response.use(null, validateNetworkError)

export default api
