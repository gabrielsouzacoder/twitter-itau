import axios from 'axios'
import getToken from './auth'

const instance = axios.create({
  baseURL: 'https://api.twitter.com'
})

instance.interceptors.request.use(async request => {
  if (global.token === undefined) { global.token = await getToken() }
  request.headers.Authorization = global.token

  return request
}, error => {
  console.log(error)
})

instance.interceptors.response.use(async response => {
  return response
}, async error => {
  const originalRequest = error.config

  if ((error.response.status === 400 || error.response.status === 403 || error.response.status === 401) && !originalRequest._retry) {
    originalRequest._retry = true

    global.token = await getToken()

    originalRequest.headers.Authorization = global.token
    return axios(originalRequest)
  } else {
    console.log(error.response)
  }
})

export default instance
