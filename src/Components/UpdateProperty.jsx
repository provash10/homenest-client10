import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateProperty = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const property = data.result;
  console.log(property);

   const handleUpdateProperty = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            category: e.target.category.value,
            description: e.target.description.value,
            location: e.target.location.value,
            price: Number(e.target.price.value),
            image: e.target.image.value,
            // postedBy: e.target.userName.value,
            // createdAt: new Date().toISOString(),
            userEmail: e.target.userEmail.value,
            userName: e.target.userName.value,
        }
        console.log(formData); //checked ok ... 
        fetch(`http://localhost:3000/properties/${property._id}`,{
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
            },

            // body: formData  -->400 showing
            body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            // toast.success("Update Successfully")
            if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'Property updated successfully',
          showConfirmButton: true,
        })
        .then(()=>{
           navigate(`/property-details/${property._id}`)
          //  navigate('/all-propertise')
        })
      } 
      
      else {
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: 'Update failed. Try again!',
          showConfirmButton: true,
        });
        // navigate('/all-propertise')
      }
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className="min-h-[90vh] flex justify-end items-start bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 pt-16">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl text-white border border-white/20 space-y-8 mr-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Update Property</h1>

        <form onSubmit={handleUpdateProperty} className="space-y-8">
          
          <div>
            <label className="block mb-3 font-semibold text-xl">Property Name</label>
            <input
              type="text"
              defaultValue={property.name}
              name="name"
              placeholder="Property Name"
              className="input input-bordered w-full bg-white/20 text-white py-4 px-6 text-xl h-16"
            />
          </div>

          
          <div>
            <label className="block mb-3 font-semibold text-xl">Description</label>
            <textarea
              name="description"
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
              name="category"
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
                name="price"
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
                name="location"
                defaultValue={property.location}
                placeholder="Location"
                className="input input-bordered w-full bg-white/20 text-white py-4 px-6 text-xl h-16"
              />
            </div>
            <div>
              <label className="block mb-3 font-semibold text-xl">Image Link</label>
              <input
                type="text"
                name="image"
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
                name="userName"
                defaultValue={property.userName}
                readOnly
                className="input input-bordered w-full bg-gray-400/30 text-white py-4 px-6 text-xl h-16 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block mb-3 font-semibold text-xl">User Email</label>
              <input
                type="email"
                name="userEmail"
                defaultValue={property.userEmail}
                readOnly
                className="input input-bordered w-full bg-gray-400/30 text-white py-4 px-6 text-xl h-16 cursor-not-allowed"
              />
            </div>
          </div>

           <button type="submit" className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 py-5 rounded-2xl font-bold shadow-2xl text-2xl mt-8 hover:scale-105 transition-transform duration-200 cursor-pointer">
          Update Property
        </button>
        </form>

        
       
      </div>
    </div>
  );
};

export default UpdateProperty;
