import React from "react";

const loadingCircle = () => {
  return (
    <div className="left-0 fixed top-0 w-full h-full z-30 bg-black/50 flex justify-center items-center">
      <div
        className="inline-block z-40  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default loadingCircle;
