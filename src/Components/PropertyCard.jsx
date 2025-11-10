import React from 'react';
import toast from 'react-hot-toast';



const PropertyCard = ({property}) => {
    console.log(property); // checked ok

    const handleViewDetails =()=>{
        toast.success(`You contacted ${property.postedBy}!`);
    }

    return (
        // <div>
        //     <h3>this is Property Card</h3>
        // </div>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-44 sm:h-48 object-cover"
        src={property.image}
        alt={property.name}
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold text-gray-800">{property.name}</h2>
        <p className="text-xs text-gray-500 mb-1">{property.category}</p>
        <p className="text-gray-600 mb-2 text-sm">{property.short_description}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-800 font-bold text-sm">$ {property.price}</span>
          <span className="text-gray-500 text-xs">{property.location}</span>
        </div>

        <button onClick={handleViewDetails} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
          View Details
        </button>
        <p className="text-xs text-gray-400 mt-1">Posted by {property.postedBy}</p>
      </div>

    </div>
    );
};

export default PropertyCard;