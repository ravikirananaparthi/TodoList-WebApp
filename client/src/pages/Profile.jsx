import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

function Profile(props) {
  const { isAuthenticated, loader, user } = useContext(Context);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        {loader ? (
          <Loader />
        ) : (
          <div className="max-w-md mx-auto bg-gray-800 text-white shadow-md rounded-md p-6">
            <h1 className="text-2xl font-semibold mb-4">Profile</h1>
            <div className="mb-4">
              <label className="block text-gray-400 font-semibold mb-2">
                Name:
              </label>
              <span className="text-gray-200">{user?.name}</span>
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 font-semibold mb-2">
                Email:
              </label>
              <span className="text-gray-200">{user?.email}</span>
            </div>
            {/* Add more profile information here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
