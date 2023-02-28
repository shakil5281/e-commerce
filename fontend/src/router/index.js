import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const Home = React.lazy(()=> import('../components/Screenpage/Home'))
const Login = React.lazy(()=> import('../components/pages/admin/login/index'))
const Signup = React.lazy(()=> import('../components/pages/admin/signup/index'))
const Singleproduct = React.lazy(()=> import('../components/pages/singleproduct/index'))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/product/:id',
                element: <Singleproduct />
            },
        ]
    }
])