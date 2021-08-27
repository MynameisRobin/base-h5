import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
AxiosInstance.interceptors.response.use(
  response => {
    const res = response.data
    return Promise.resolve(res)
  },
  error => {
    return Promise.reject(error.response)
  }
)

export default AxiosInstance;
