import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PropertyCard from '../Components/PropertyCard';

const AllPropertise = () => {
    const data = useLoaderData();
    // console.log(data);
    const [search, setSearch] = useState('');

    const term = search.trim().toLocaleLowerCase();
    const filteredProperties = term
        ? data.filter(property =>
            property.name.toLowerCase().includes(term) ||
            property.category.toLowerCase().includes(term) ||
            property.location.toLowerCase().includes(term)
          )
        : data;
   

    return (
        // <div>
        //     <h3>All Propertise : {data.length}</h3>
        // </div>
        // <div>
        //     <div className="text-2xl text-center font-bold"> All Properties</div>
        //     <p className=" text-center m-4 ">Choose Your Best</p>
            
        //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        //         {
        //             data.map(property=><PropertyCard key={property._id} property={property}></PropertyCard>)
        //         }
        //     </div>
        // </div>

        <div>
         
            <div className="flex justify-between items-center my-4">
                <h2 className="text-2xl font-bold">
                     Properties Found <span className="text-blue-600 text-xl">({filteredProperties.length})</span>
                </h2>
               
                <input
                    type="text"
                    placeholder="Search by name, category or location..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-64"
                />
            </div>

            <div className="text-2xl text-center font-bold"> All Properties</div>
            <p className=" text-center m-4 ">Choose Your Best</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    filteredProperties.map(property =>
                        <PropertyCard key={property._id} property={property}></PropertyCard>
                    )
                }
            </div>
        </div>
    );
};

export default AllPropertise;