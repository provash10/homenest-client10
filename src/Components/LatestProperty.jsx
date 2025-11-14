import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const LatestProperty = ({ property }) => {
  const navigate = useNavigate();
  const { _id, name, category, short_description, location, price, image, postedBy } = property;

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
        fetch(`http://localhost:3000/properties/${_id}`, { method: "DELETE" })
          .then(res => res.json())
          .then(() => {
            navigate('/all-propertise');
            Swal.fire("Deleted!", "Your property has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-44 sm:h-48 object-cover" src={image || "https://via.placeholder.com/400x300"} alt={name} />
      <div className="p-3">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-xs text-gray-500 mb-1">{category}</p>
        <p className="text-sm text-gray-600 mb-2">{short_description}</p>
        <div className="flex justify-between mb-2">
          <span className="font-bold text-sm text-gray-600">$ {price}</span>
          <span className="text-xs text-gray-500">{location}</span>
        </div>
        <div className="flex gap-4">
          <Link to={`/property-details/${_id}`} className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm text-center">View Details</Link>
          <button onClick={handleDelete} className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm">Delete</button>
        </div>
        <p className="text-xs text-gray-400 mt-1">Posted by {postedBy}</p>
      </div>
    </div>
  );
};

export default LatestProperty;
