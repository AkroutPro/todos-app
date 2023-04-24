import React from "react";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className="relative w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent rounded-full animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-400 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
