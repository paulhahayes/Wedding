import React from "react";

const BackToTop = () => {
  return (
    <div
      className="backdrop-blur-3xl bg-slate-700/60 hover:bg-neutral-100/20 
      py-2 px-4 w-[25%]
       text-white mt-2 border border-white"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      Back to top
    </div>
  );
};

export default BackToTop;
