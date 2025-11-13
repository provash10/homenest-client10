import { useState } from "react";
import { useLoaderData } from "react-router";
import LatestProperty from "../Components/LatestProperty";

const Home = () => {
    const data = useLoaderData();
    const [search, setSearch] = useState('');
    // console.log(data);
    const properties = data || [];


    const filteredProperties = properties.filter(property =>
        property.name.toLowerCase().includes(search.toLowerCase()) ||
        property.category.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className='text-2xl font-bold'>
                    Properties Found <span className='text-blue-600 text-xl font-bold'>({filteredProperties.length})</span>
                </h1>
                <input
                    type="text"
                    placeholder="Search by name, category or location..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-64"
                />
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map(property => (
                        <LatestProperty key={property._id} property={property} />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No properties found!</p>
                )}
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {filteredProperties.length > 0 ? (
        filteredProperties.map(property => (
            <LatestProperty 
                key={property._id} 
                property={{
                    ...property,
                    image: property.image || "https://via.placeholder.com/400x300?text=No+Image"
                }} 
            />
        ))
    ) : (
        <p className="text-center col-span-full text-gray-500">No properties found!</p>
    )}
</div>
        </div>
    );
};

export default Home;
