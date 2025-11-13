import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const PropertyCard = ({property}) => {
    console.log(property); // checked ok
    const navigate = useNavigate();
    
    const {_id, name, category, short_description, location, price, image, postedBy} = property
    // const handleViewDetails =()=>{
    //     toast.success(`You contacted ${postedBy}!`);
    // }


     const handleDelete = () => {
            console.log('delete ok') //checked
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   api call
                    fetch(`http://localhost:3000/properties/${property._id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        // body: JSON.stringify(FormData)
                    })
                        .then((res) => res.json())
                        .then(data => {
                            console.log(data)
    
                            navigate('/all-propertise')
    
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        })
                        .catch(err => {
                            console.log(err)
                        })
    
    
                }
            });
        }

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
        <div className='flex justify-between items-center gap-4'>
          <Link to={`/property-details/${_id}`} className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"> View Details</Link>
          <Link to={`/update-property/${_id}`} className="flex-1 bg-yellow-500 text-white text-center py-2 rounded-lg hover:bg-yellow-600 text-sm font-medium">
                        Update
                    </Link>
          <button onClick={handleDelete} type="submit" className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                            Delete Property
                        </button>
        </div>
        <p className="text-xs text-gray-400 mt-1">Posted by {postedBy}</p>
      </div>

    </div>
    );
};

export default PropertyCard;

