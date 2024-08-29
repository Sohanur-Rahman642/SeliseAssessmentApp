import axios, { AxiosInstance } from "axios";

const BASE_URL = ''

const apiClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default apiClient