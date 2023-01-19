import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import LoginForm from "../features/users/LoginForm";
import AdminPage from "../pages/AdminPage/AdminPage";
import Home from "../pages/Home/Home";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <Home />},
            {path: 'admin', element: <AdminPage />},
        ]
    }
]

export const router = createBrowserRouter(routes);