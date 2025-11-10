import React from 'react';
import { useLoaderData } from 'react-router';
import PropertyCard from '../Components/PropertyCard';

const AllPropertise = () => {
    const data = useLoaderData();
    // console.log(data);

    return (
        // <div>
        //     <h3>All Propertise : {data.length}</h3>
        // </div>
        <div>
            <div className="text-2xl text-center font-bold"> All Properties</div>
            <p className=" text-center m-4 ">Choose Your Best</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    data.map(property=><PropertyCard key={property._id} property={property}></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default AllPropertise;