import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router';


const PropertyCard = ({property}) => {
    console.log(property); // checked ok
    
    const {_id, name, category, short_description, location, price, image, postedBy} = property
    // const handleViewDetails =()=>{
    //     toast.success(`You contacted ${postedBy}!`);
    // }

    return (
        // <div>
        //     <h3>this is Property Card</h3>
        // </div>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-44 sm:h-48 object-cover"
        src={image}
        alt={name}
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-xs text-gray-500 mb-1">{category}</p>
        <p className="text-gray-600 mb-2 text-sm">{short_description}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-800 font-bold text-sm">$ {price}</span>
          <span className="text-gray-500 text-xs">{location}</span>
        </div>

        {/* <button onClick={handleViewDetails} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
          View Details
        </button> */}
        <Link to={`/property-details/${_id}`} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"> View Details</Link>
        <p className="text-xs text-gray-400 mt-1">Posted by {postedBy}</p>
      </div>

    </div>
    );
};

export default PropertyCard;