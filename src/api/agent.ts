import axios, { AxiosError, AxiosResponse } from 'axios';
import { Checkout } from '../interfaces/Checkout';
import { Service } from '../interfaces/Service';
import { Role, User, UserFormValues } from '../interfaces/User';
import store from '../stores/store';


const responseBody = <T> (response: AxiosResponse<T>) => response.data;

axios.defaults.headers.common['Authorization'] = `Bearer ${store.token}`;

axios.defaults.baseURL = 'http://localhost:5235/api';

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    search: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const products = {
    list: () => requests.get<Service[]>('/product'),
    details: (id: string) => requests.get<Service>(`/product/${id}`),
    create: (product: Service) => requests.post<Service>('/product', product),
    update: (product: Service) => requests.put<void>('/product', product),
    delete: (id: string) => requests.del<void>(`/product/${id}`)
}

const checkout = {
    details: (id: number) => requests.get<Checkout>(`/checkout/${id}`),
    create: (checkout: Checkout) => requests.post<Checkout>('/checkout', checkout),
}

const account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user),
    role: () => requests.get<Role>('/account/getrole')
}


const agent = {
    products,
    account,
    checkout
}

export default agent;

