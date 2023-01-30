import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import LoginForm from "../features/users/LoginForm";
import AdminHome from "../pages/AdminPage/Admin.Home";
import Home from "../pages/Home/Home";
import AdminServices from "../pages/AdminPage/AdminServicese";
import AdminCustomers from "../pages/AdminPage/AdminCustomers";
import AdminSetting from "../pages/AdminPage/AdminSetting";
import AdminPage from "../pages/AdminPage/AdminPage";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <Home />},
            {path: 'admin', element: <AdminPage />},
            {path: 'services', element: <AdminServices/>},
            {path: 'customers', element: <AdminCustomers/>},
            {path: 'settings', element: <AdminSetting/>},
        ]
    }
]

export const router = createBrowserRouter(routes);