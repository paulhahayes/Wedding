"use client";
import Card from "@/components/Card";
import { CldImage } from "next-cloudinary";

const page = () => {
  return (
    <div>
      <CldImage width="500" height="500" src="scubar" alt="Scubar" />
    </div>
  );
};

export default page;

{
  /* <div className=" w-full ">
<div className="w-full min-[330px]:pb-4 sm:py-8  min-[330px]:flex min-[330px]:justify-center">
  <Card />
</div>
<div className="w-full min-[330px]:pb-4 sm:pb-8  flex md:justify-end min-[330px]:justify-center">
  <Card />
</div>
<div className="w-full  min-[330px]:pb-4 sm:pb-8 min-[330px]:flex min-[330px]:justify-center">
  <Card />
</div>
</div> */
}
