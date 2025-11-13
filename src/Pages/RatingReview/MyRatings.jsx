import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const MyRatings = () => {
  const ratings = useLoaderData(); 
  console.log(ratings)
  const { user } = use(AuthContext);

  const userRatings = ratings.filter(r => r.reviewerEmail === user?.email);

  if (!userRatings || userRatings.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        No ratings found!
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-6">My Ratings & Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userRatings.map(rate => (
          <div
            key={rate._id}
            className="p-4 shadow-md rounded-2xl border hover:shadow-lg transition bg-white"
          >
            <img
              src={rate.propertyImage}
              alt={rate.propertyName}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h3 className="text-lg font-semibold mb-1">{rate.propertyName}</h3>
            <p className="text-yellow-500 font-medium">⭐ {rate.rating}/5</p>
            <p className="text-gray-600 italic my-2">"{rate.reviewText}"</p>
            <p className="text-sm text-gray-500">
              Reviewed on: {new Date(rate.reviewDate).toLocaleDateString()}
            </p>
            <p className="text-sm mt-1 text-gray-700 font-medium">
              By: {rate.reviewerName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRatings;
