import React, { use } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';

const PropertyDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    const navigate = useNavigate();
    const { user } = use(AuthContext);

    const property = data.result;
    // console.log(property);
    const { _id, name, category, short_description, description, location, price, image, postedBy, createdAt, userEmail, userName } = property;
    //   console.log({_id, name, category})

    const handleDelete = () => {
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
                fetch(`http://localhost:3000/properties/${_id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                })
                .then(res => res.json())
                .then(() => {
                    // console.log('delete ok')
                    navigate('/all-propertise');
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                })
                .catch(err => console.log(err));
            }
        });
    };
          // ratingsubmit-handle
    const handleRatingSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const ratingData = {
            propertyId: _id,
            propertyName: name,
            propertyImage: image,
            rating: parseInt(form.rating.value),
            reviewText: form.reviewText.value,
            reviewerEmail: user.email,
            reviewerName: user.displayName,
            reviewDate: new Date().toISOString()
        };

        fetch("http://localhost:3000/ratings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ratingData)
        })
        .then(res => res.json())
        .then(() => {
            console.log('submit ok')
            Swal.fire("Success!", "Rating submitted successfully", "success");
            form.reset();
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="bg-white shadow-sm p-4 text-xl font-semibold">
                HomeNest | Property Details
            </div>

            <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
                
                {/* left */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="w-full min-h-max bg-gray-200 rounded-2xl shadow-inner">
                        <img className='w-full h-64 object-cover rounded-2xl' src={image} alt="" />
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4 border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-800">{short_description}</h2>
                        <textarea
                            className="w-full border p-3 rounded-lg text-gray-700 leading-relaxed"
                            rows={6}
                            defaultValue={description}
                        ></textarea>
                    </div>

                    <div className="flex justify-between items-center gap-4 flex-col sm:flex-row mx-0 sm:mx-20">
                        {/* <button>Edit Property</button> */}
                        <Link to={`/update-property/${_id}`} className="bg-green-600 hover:bg-amber-600 hover:text-amber-100 text-2xl font-bold text-center px-6 py-3 rounded-3xl">
                            Edit Property
                        </Link>
                        <button onClick={handleDelete} type="submit" className="bg-red-600 hover:bg-cyan-500 hover:text-red-600 text-white text-2xl font-bold text-center px-6 py-3 rounded-3xl">
                            Delete Property
                        </button>
                    </div>
                </div>

                {/* right */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-4">
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight">{name}</h1>

                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mt-4">
                            <div className="space-y-2 text-gray-700">
                                <p className="text-lg"><span className="font-semibold">Price: </span> ${price}</p>
                                <p><span className="font-semibold">Location: </span>{location}</p>
                                <p><span className="font-semibold">Category: </span>{category}</p>
                                <p><span className="font-semibold">Posted Date: </span>{createdAt}</p>
                            </div>

                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mt-4">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ratings & Reviews</h2>
                                <form className="space-y-4" onSubmit={handleRatingSubmit}>
                                    <input
                                        name="rating"
                                        type="number"
                                        min="1"
                                        max="5"
                                        placeholder="Rating (1–5)"
                                        className="w-full border p-3 rounded-lg"
                                    />
                                    <textarea
                                        name="reviewText"
                                        placeholder="Write your review..."
                                        className="w-full border p-3 rounded-lg"
                                        rows="3"
                                    ></textarea>
                                    <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold w-full">
                                        Submit Rating
                                    </button>
                                </form>

                                <Link to='/my-ratings' className='bg-amber-500 p-3 inline-block mt-4'>
                                    Click to watch Rating Review
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* postedBy */}
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-2 mt-6 max-w-7xl mx-auto">
                        <h3 className="text-xl font-semibold">{postedBy}</h3>
                        <p className="text-gray-800 font-medium">{userEmail}</p>
                        <p className="text-gray-600 text-sm">{userName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
