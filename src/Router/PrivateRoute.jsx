// import React from 'react';

// const PrivateRoute = () => {
//     return (
//         <div>
//             {children}
//         </div>
//     );
// };

// export default PrivateRoute;


import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} =use(AuthContext)
    // console.log(user);

    const location = useLocation();
    // console.log(location)

    if(loading){
        return <Loading></Loading>
    }


    //if have user 
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
    //if not user -- navigate -->Login

    
};

export default PrivateRoute;
