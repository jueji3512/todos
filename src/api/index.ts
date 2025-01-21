import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse } from "axios"

let baseURL;
const timeout = 5000;

if (process.env.NODE_ENV === 'production') {
  baseURL = "http://localhost:5173/"
} else {
  baseURL = ""
}

const instance = axios.create({
  timeout,
  baseURL,
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
