import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import AllPropertise from "../Pages/AllPropertise";
import AddProperise from "../Pages/AddProperise";
import PropertyDetails from "../Components/PropertyDetails";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProperty from "../Components/UpdateProperty";
import MyRatings from "../Pages/RatingReview/MyRatings";
import MyPropertise from "../Pages/MyPropertise";


export const router = createBrowserRouter([
    {
        path: ('/'),
        Component: Root,
        children: [
            {
                index: true,
                element: <Home></Home>,
                // loader: () =>fetch('http://localhost:3000/properties'),
                loader: () => fetch('http://localhost:3000/latest-propertises')
            },
            {
                path: '/all-propertise',
                element: <AllPropertise></AllPropertise>,
                loader: () => fetch('http://localhost:3000/properties'),
            },
            {
                path: '/property-details/:id',
                element: <PrivateRoute>
                    <PropertyDetails></PropertyDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/properties/${params.id}`)
            },
            {
                path: '/add-propertise',

                element: (<PrivateRoute>
                    <AddProperise></AddProperise>
                </PrivateRoute>),
            },

            {
                path: "/update-property/:id",
                element:
                    <PrivateRoute>
                        <UpdateProperty></UpdateProperty>
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/properties/${params.id}`),

            },
            {
                path: '/my-property',
                element: <MyPropertise></MyPropertise>
            },
            {
                path : '/my-ratings',
                element: <MyRatings></MyRatings>,
                loader: () => fetch('http://localhost:3000/ratings')
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            }
        ]
    }
])