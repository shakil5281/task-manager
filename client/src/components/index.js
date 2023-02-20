import React from "react";

const Loding = React.lazy(()=>import('./layout/Loding/index'))
const Layout = React.lazy(()=>import('./layout/index'))
const Dashboard = React.lazy(()=>import('../pages/Dashboard'))
const Create = React.lazy(()=>import('../pages/Create'))
const Task = React.lazy(()=>import('../pages/Task'))
const Complite = React.lazy(()=>import('../pages/Complite'))
const Progress = React.lazy(()=>import('../pages/Progress'))
const Canceled = React.lazy(()=>import('../pages/Canceled'))



export{
    Loding,
    Layout,
    Dashboard,
    Task,
    Complite,
    Progress,
    Canceled,
    Create
}