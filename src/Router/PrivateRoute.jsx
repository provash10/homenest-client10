import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { RiseLoader } from 'react-spinners';


const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);

    const location = useLocation();
    console.log(location);

    if(loading){
        return (
            <div className='h-[97vh] flex justify-center items-center'>
                <RiseLoader />
            </div>
        )
    }
    if(!user){
        return <Navigate to="/login" state={location.pathname}/>;
    }


    return children;
};

export default PrivateRoute;