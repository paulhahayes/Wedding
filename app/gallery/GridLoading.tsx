import React from "react";

const GridLoading = () => {
  return (
    <div className=" rounded-md ">
      <div
        className="relative mb-5 
     w-full  
        border-white border
        bg-slate-700/30 backdrop-filter backdrop-blur-lg
         first-letter:before:absolute overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]

    rounded-lg h-[290px]"
      ></div>
      <div className="space-y-3">
        <div
          className="h-5 w-8/12 rounded-full bg-slate-700/30 backdrop-filter backdrop-blur-lg border mb-2
        "
        ></div>
      </div>
    </div>
  );
};

export default GridLoading;
