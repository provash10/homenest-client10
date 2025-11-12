import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import AllPropertise from "../Pages/AllPropertise";
import AddProperise from "../Pages/AddProperise";
import MyPropertise from "../Pages/MyPropertise";
import PropertyDetails from "../Components/PropertyDetails";
import Register from "../Pages/Auth/Register";


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
                element : <AllPropertise></AllPropertise>,
                loader: () =>fetch('http://localhost:3000/properties'),
            },
            {
                path: '/property-details/:id',
                element: <PropertyDetails></PropertyDetails>,
                loader: ({params})=>fetch(`http://localhost:3000/properties/${params.id}`)
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
            },
            {
                path : '/register',
                Component: Register,
            }
        ]
    }
])