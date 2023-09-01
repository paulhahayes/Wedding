"use client";
//TODO Upload, Pagination, + scroll, Loader (Blur?), re-render on upload / delete

const page = () => {
  return (
    <div className="w-full relative">
      {/* Upload Bar */}
      <div className="w-full h-12 bg-gray-200 p-2 mb-4 "></div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <div className="h-[200px] bg-red-400"></div>
        <div className="h-[200px] bg-red-400"></div>
        <div className="h-[200px] bg-red-400"></div>
        <div className="h-[200px] bg-red-400"></div>
        <div className="h-[200px] bg-red-400"></div>
        <div className="h-[200px] bg-red-400"></div>
        <div className="h-[200px] bg-red-400"></div>
      </div>
    </div>
  );
};

export default page;
