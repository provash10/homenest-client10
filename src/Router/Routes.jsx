import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import AllPropertise from "../Pages/AllPropertise";
import AddProperise from "../Pages/AddProperise";
import MyPropertise from "../Pages/MyPropertise";

export const router = createBrowserRouter([
    {
        path:('/'),
        Component: Root,
        children:[
            {
                index : true,
                Component: Home,
            },
            {
                path : '/all-propertise',
                Component: AllPropertise,
            },
            {
                path : '/add-propertise',
                Component:AddProperise ,
            },
            {
                path : '/my-propertise',
                Component: MyPropertise,
            },
            {
                path : '/login',
                Component: Login,
            }
        ]
    }
])