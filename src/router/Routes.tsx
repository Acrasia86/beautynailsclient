import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import LoginForm from "../features/users/LoginForm";
import AdminPage from "../pages/AdminPage/AdminPage";
import Home from "../pages/Home/Home";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <Home />},
            {path: 'login', element: <LoginForm />},
            {path: 'admin', element: <AdminPage />},
            {path: 'registerpage', element: <RegisterPage />}
        ]
    }
]

export const router = createBrowserRouter(routes);