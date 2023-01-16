import axios, { AxiosError, AxiosResponse } from 'axios';
import { Product } from '../interfaces/Product';
import { User, UserFormValues } from '../interfaces/User';


const responseBody = <T> (response: AxiosResponse<T>) => response.data;

axios.defaults.baseURL = 'http://localhost:5235/api';

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    search: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const products = {
    list: () => requests.get<Product[]>('/product'),
    details: (id: string) => requests.get<Product>(`/product/${id}`),
    create: (product: Product) => requests.post<Product>('/product', product),
    update: (product: Product) => requests.put<void>('/product', product),
    delete: (id: string) => requests.del<void>(`/product/${id}`)
}

const account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user) 
}


const agent = {
    products,
    account
}

export default agent;

