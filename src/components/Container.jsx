import React from "react";

const Container = ({children}) => {
  return (
    <>
      <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default Container;