import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="min-[390px]:pb-14 sm:pb-8">
        <div className="flex min-[390px]:flex-col sm:flex-row gap-8 min-[330px]:mx-4 min-[330px]:justify-center">
          <div className="flex-1 sm:h-[600px] flex flex-col gap-[20px] items-end w-[50%]  overflow-hidden animate-pulse ">
            {/* Loading skeleton for the first section */}
            <div className="w-full h-32 bg-slate-700/30 rounded backdrop-blur-3xl border-white border min-[330px]:text-[12px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:-lg before:animate-[shimmer_1.5s_infinite]"></div>

            {/* Loading skeleton for the second section */}
            <div className="w-full h-32 bg-slate-700/30 rounded backdrop-blur-3xl border-white border text-white text-[20px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:-lg before:animate-[shimmer_1.5s_infinite]"></div>

            {/* Loading skeleton for the third section */}
            <div className="w-full h-32 bg-slate-700/30 rounded backdrop-blur-3xl border-white border text-white text-[20px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:-lg before:animate-[shimmer_1.5s_infinite]"></div>

            {/* Loading skeleton for the fourth section */}
            <div className="w-full h-32 bg-slate-700/30 rounded backdrop-blur-3xl border-white border text-white text-[20px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:-lg before:animate-[shimmer_1.5s_infinite] "></div>
          </div>

          <div className=" sm:h-[600px] w-0 border-white border-r text-white" />

          {/* Loading skeleton for the form section */}
          <div className="flex-1 sm:h-[500px] bg-slate-700/30 rounded backdrop-blur-3xl border-white border text-white w-[50%] animate-pulse">
            <div className="relative w-full h-full space-y-3 overflow-hidden rounded-md p-4 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:-lg before:animate-[shimmer_1.5s_infinite]">
              <div className="h-[32%] w-full rounded-lg bg-neutral-100/10"></div>

              <div className="h-[32%] w-full rounded-lg bg-neutral-100/10"></div>

              <div className="h-[32%] w-full rounded-lg bg-neutral-100/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
