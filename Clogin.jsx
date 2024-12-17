import React from 'react';
import { Link } from 'react-router-dom';

const CLogin = () => {
  return (
    <div className="flex flex-col items-center space-y-9 mt-10 mb-10 px-4">
      <Link to="/admin">
        <button className="w-full max-w-sm px-5 py-3 button-3d font-medium uppercase rounded-2xl text-[#005286] bg-gradient-to-bl from-gray-100 via-gray-200 to-gray-400 hover:bg-gradient-to-br hover:from-gray-100 hover:via-gray-200 hover:to-gray-400">
          Admin Login
        </button>
      </Link>

      <Link to="/client">
        <button className="w-full max-w-sm px-5 py-3 button-3d font-medium uppercase rounded-2xl text-[#005286] bg-gradient-to-bl from-gray-100 via-gray-200 to-gray-400 hover:bg-gradient-to-br hover:from-gray-100 hover:via-gray-200 hover:to-gray-400">
          Client Login
        </button>
      </Link>

      <Link to="/counselor">
        <button className="w-full max-w-sm px-5 py-3 button-3d font-medium uppercase rounded-2xl text-[#005286] bg-gradient-to-bl from-gray-100 via-gray-200 to-gray-400 hover:bg-gradient-to-br hover:from-gray-100 hover:via-gray-200 hover:to-gray-400">
          Counselor Login
        </button>
      </Link>
    </div>
  );
};

export default CLogin;
