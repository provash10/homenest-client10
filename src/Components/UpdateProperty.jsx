import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateProperty = () => {
  const data = useLoaderData();
  const property = data.result;
  console.log(property);

  return (
    <div className="min-h-[90vh] flex justify-end items-start bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 pt-16">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl text-white border border-white/20 space-y-8 mr-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Update Property</h1>

        <div className="space-y-8">
          
          <div>
            <label className="block mb-3 font-semibold text-xl">Property Name</label>
            <input
              type="text"
              defaultValue={property.name}
              placeholder="Property Name"
              className="input input-bordered w-full bg-white/20 text-white py-4 px-6 text-xl h-16"
            />
          </div>

          
          <div>
            <label className="block mb-3 font-semibold text-xl">Description</label>
            <textarea
              defaultValue={property.description}
              placeholder="Description"
              rows={5}
              className="textarea textarea-bordered w-full bg-white/20 text-white py-4 px-6 text-xl"
            />
          </div>

          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-3 font-semibold text-xl">Category</label>
              <select
                defaultValue={property.category}
                className="input input-bordered w-full bg-amber-500 text-white py-4 px-6 text-xl h-16"
              >
                <option>Rent</option>
                <option>Sale</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </div>
            <div>
              <label className="block mb-3 font-semibold text-xl">Price</label>
              <input
                type="number"
                defaultValue={property.price}
                placeholder="Price"
                className="input input-bordered w-full bg-white/20 text-white py-4 px-6 text-xl h-16"
              />
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-3 font-semibold text-xl">Location</label>
              <input
                type="text"
                defaultValue={property.location}
                placeholder="Location"
                className="input input-bordered w-full bg-white/20 text-white py-4 px-6 text-xl h-16"
              />
            </div>
            <div>
              <label className="block mb-3 font-semibold text-xl">Image Link</label>
              <input
                type="text"
                defaultValue={property.image}
                placeholder="Image URL"
                className="input input-bordered w-full bg-white/20 text-white py-4 px-6 text-xl h-16"
              />
            </div>
          </div>

         {/* user */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-3 font-semibold text-xl">User Name</label>
              <input
                type="text"
                defaultValue={property.userName}
                readOnly
                className="input input-bordered w-full bg-gray-400/30 text-white py-4 px-6 text-xl h-16 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block mb-3 font-semibold text-xl">User Email</label>
              <input
                type="email"
                defaultValue={property.userEmail}
                readOnly
                className="input input-bordered w-full bg-gray-400/30 text-white py-4 px-6 text-xl h-16 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        
        <button className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 py-5 rounded-2xl font-bold shadow-2xl text-2xl mt-8 hover:scale-105 transition-transform duration-200">
          Update Property
        </button>
      </div>
    </div>
  );
};

export default UpdateProperty;
