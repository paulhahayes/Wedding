import React from "react";
import GridLoading from "./GridLoading";

const LoadingGrid = () => {
  return (
    <div className="mx-auto sm:px-0 px-4">
      <div></div>
      <div className="grid grid-cols-1 pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 ">
        <GridLoading />
        <GridLoading />
        <GridLoading />
        <GridLoading />
        <GridLoading />
      </div>
    </div>
  );
};

export default LoadingGrid;
