import React from 'react';

const AddProperise = () => {
    const handleAddProperty = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            category: e.target.category.value,
            short_description: e.target.description.value,
            location: e.target.location.value,
            price: Number(e.target.price.value),
            image: e.target.image.value,
            postedBy: e.target.userName.value,
            createdAt: new Date().toISOString(),
            userEmail: e.target.userEmail.value,
            userName: e.target.userName.value,
        }
        console.log(formData); //checked ok ... 
        fetch('http://localhost:3000/properties',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },

            // body: formData  -->400 showing
            body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="max-w-4xl mx-auto p-6">

            <form onSubmit={handleAddProperty} className="bg-white shadow-md rounded-xl p-8 space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Property name */}
                    <div className="col-span-1 sm:col-span-2">
                        <label className="block text-gray-700 font-medium mb-1">Property Name</label>
                        <input
                            type="text" name="name"
                            placeholder="Enter property name"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* description */}
                    <div className="col-span-1 sm:col-span-2">
                        <label className="block text-gray-700 font-medium mb-1">Description</label>
                        <textarea
                         name="description"
                            placeholder="Enter description"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 resize-none h-20"
                        />
                    </div>

                    {/* category */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Category</label>
                        <select name="category" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500">
                            <option>Rent</option>
                            <option>Sale</option>
                            <option>Commercial</option>
                            <option>Land</option>
                        </select>
                    </div>

                    {/* price */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Price</label>
                        <input
                            type="number" name="price"
                            placeholder="Enter price"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* location */}
                    <div className="col-span-1 sm:col-span-2">
                        <label className="block text-gray-700 font-medium mb-1">Location</label>
                        <input
                            type="text" name="location"
                            placeholder="City, area, or address"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* image */}
                    <div className="col-span-1 sm:col-span-2">
                        <label className="block text-gray-700 font-medium mb-1">Image Link</label>
                        <input
                            type="text" name="image"
                            placeholder="Enter image URL"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* user name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">User Name</label>
                        <input
                            type="text" name="userName"
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                        />
                    </div>

                    {/* user email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">User Email</label>
                        <input
                            type="email" name="userEmail"
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                        />
                    </div>
                </div>

                {/* submit btn */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
                >
                    Add Property
                </button>

            </form>
        </div>
    );
};

export default AddProperise;
