import React from "react";

import { createBrowserRouter, Navigate  } from "react-router-dom";
import App from "../App";
import Canceled from "../pages/Canceled";
import Complite from "../pages/Complite";
import Create from "../pages/Create";
import Dashboard from '../pages/Dashboard';
import Error from "../pages/Error";
import Progress from "../pages/Progress";
import Task from "../pages/Task";
import Users from "../pages/Users";
import Login from '../pages/Login'
import SignUp from '../pages/Signup'
import Recovery from '../pages/Recovery'
import OTPverify from '../pages/OTPverify'
import ChangePasswordOTP from '../pages/ChangePasswordOTP'
import DeleteTask from "../hooks/DeleteTask";
import { getToken } from "../helper/sessionStorege";
import Profile from "../pages/Profile";
import Logout from "../pages/profile/Logout";
import ProfileDashboard from "../pages/profile/index"



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: getToken() ? <Dashboard /> : <Navigate replace to={"/users/login"} /> 
            },
            {
                path: '/create',
                element: localStorage.getItem('token') ? <Create /> : <Navigate replace to={"/users/login"} />
            },
            {
                path: '/task/:status',
                element: getToken() ? <Task /> : <Navigate replace to={"/users/login"} />
            },
            {
                path: '/progress/:status',
                element: getToken() ? <Progress /> : <Navigate replace to={"/users/login"} />
            },
            {
                path: '/complite/:status',
                element: getToken() ? <Complite /> : <Navigate replace to={"/users/login"} />
            },
            {
                path: '/cancel/:status',
                element: getToken() ? <Canceled /> : <Navigate replace to={"/users/login"} />
            },
            {
                path: '/taskdelete/:status',
                element:  getToken() ? <DeleteTask /> : <Navigate replace to={"/users/login"} />
            },
            {
                path: '*',
                element:  getToken() ? <Error /> : <Navigate replace to={"/users/login"} />
            },
        ]
        
    },
    {
        path: '/users',
        element: <Users /> ,
        children: [
            {
                path: '/users/login',
                element: !getToken() ? <Login /> : <Navigate replace to={"/"} />
            },
            {
                path: '/users/signup',
                element: !getToken() ? <SignUp /> : <Navigate replace to={"/"} />
            },
            {
                path: '/users/recovery',
                element: !getToken() ? <Recovery /> : <Navigate replace to={"/"} />
            },
            {
                path: '/users/otpverification',
                element: !getToken() ? <OTPverify /> : <Navigate replace to={"/"} />
            },
            {
                path: '/users/changepassword',
                element: !getToken() ? <ChangePasswordOTP /> : <Navigate replace to={"/"} />
            },
        ]
    },
    {
        path: '/profile',
        element: <Profile />  ,
        children : [
            {
                path: '/profile/dashboard',
                element: <ProfileDashboard />
            },
            {
                path: '/profile/logout',
                element: <Logout />
            },
            {
                path: '*',
                element:  getToken() ? <Error /> : <Navigate replace to={"/users/login"} />
            },
        ]
    }
])