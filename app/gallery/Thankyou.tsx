import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Thankyou = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={handleToggle}
      className={`${
        open ? "h-[270px]" : "h-[80px] sm:h-[80px]"
      } sm:w-[500px] hover:sm:w-[600px] hover:sm:h-[270px] w-full text-white bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 border fixed bottom-0 right-0 z-30 transition-all ease-in-out duration-500 flex flex-col p-4`}
    >
      <div className="sm:hidden flex justify-center text-xl">
        {open ? (
          <IoMdArrowDropdown className="w-6 h-6" />
        ) : (
          <IoMdArrowDropup className="w-6 h-6" />
        )}
      </div>
      <h2 className="sm:text-[1.7em] text-[1.4em] font-bold tracking-wide w-full text-center border-b">
        Photographs by Josefina Vargas
      </h2>
      <div>
        <div className="py-6 relative ">
          <h3 className=" text-lg opacity-80">website</h3>
          <div
            className="text-3xl absolute -translate-y-2 hover:cursor-pointer"
            onClick={() => {
              window.open("https://www.josefinavargas.com/", "_blank");
            }}
          >
            josefinavargas.com
          </div>
        </div>
        <div>
          <h3 className="text-lg opacity-80 py-6">Instagram</h3>
          <div
            className="text-3xl absolute -translate-y-8 hover:cursor-pointer"
            onClick={() => {
              window.open("https://www.instagram.com/jvmphoto_/", "_blank");
            }}
          >
            jvmphoto_
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
