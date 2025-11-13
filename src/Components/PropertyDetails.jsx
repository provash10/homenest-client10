import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const PropertyDetails = () => {
    const data = useLoaderData();
    // console.log(data); //checked
    const navigate = useNavigate();
    const property = data.result;
    console.log(property);
    const { _id, name, category, short_description, description, location, price, image, postedBy, createdAt, userEmail, userName } = property

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
        <div className="min-h-screen bg-gray-50">

            {/* header */}
            <div className="bg-white shadow-sm p-4 text-xl font-semibold">
                HomeNest | Property Details
            </div>

            <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* left side */}
                <div className="lg:col-span-3 space-y-6">

                    {/* image */}
                    <div className="w-full min-h-max bg-gray-200 rounded-2xl shadow-inner">
                        <img className='w-full h-64 object-cover rounded-2xl' src={image} alt="" />
                    </div>

                    {/* description */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4 border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-800">{short_description}</h2>
                        <textarea
                            className="w-full border p-3 rounded-lg text-gray-700 leading-relaxed"
                            rows={6}
                            // defaultValue="This beautiful apartment is located in a premium residential area with modern facilities. Close to hospitals, schools, and shopping malls. Perfect for families."
                            defaultValue={description}
                        ></textarea>
                    </div>

                    {/* edit-delete */}
                    <div className="flex justify-between items-center gap-4 flex-col sm:flex-row mx-0 sm:mx-20">
                        <Link to={`/update-property/${_id}`} className="bg-green-600 hover:bg-amber-600 hover:text-amber-100 text-2xl font-bold text-center px-6 py-3 rounded-3xl">
                            Edit Property
                        </Link>
                        <button onClick={handleDelete} type="submit" className="bg-red-600 hover:bg-cyan-500 hover:text-red-600 text-white text-2xl font-bold text-center px-6 py-3 rounded-3xl">
                            Delete Property
                        </button>
                    </div>
                </div>

                {/* right side */}
                <div className="lg:col-span-2 space-y-6">

                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-4">
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight">{name}</h1>

                        <div className="space-y-2 text-gray-700">
                            <p className="text-lg"><span className="font-semibold">Price: </span> ${price}</p>
                            <p><span className="font-semibold">Location: </span>{location}</p>
                            <p><span className="font-semibold">Category: </span>{category}</p>
                            <p><span className="font-semibold">Posted Date: </span>{createdAt}</p>
                        </div>

                        {/* ratings-reviews */}
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mt-4">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ratings & Reviews</h2>

                            <form className="space-y-4">
                                <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    placeholder="Rating (1–5)"
                                    className="w-full border p-3 rounded-lg"
                                />
                                <textarea
                                    placeholder="Write your review..."
                                    className="w-full border p-3 rounded-lg"
                                    rows="3"
                                ></textarea>

                                <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold w-full">
                                    Submit Rating
                                </button>
                            </form>

                            {/* <div className="mt-6 space-y-4">
                                <div className="p-4 border rounded-xl bg-white">
                                    <h3 className="font-semibold text-gray-900">Zahid Hasan</h3>
                                    <p className="text-sm text-yellow-600">Rating: 5/5</p>
                                    <p className="text-gray-700">Great property, Very clean.</p>
                                </div>
                            </div> */}
                        </div>

                        <Link to='/my-ratings' className='bg-amber-500 p-3'> click to watch Rating Review</Link>
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
    );
};

export default PropertyDetails;