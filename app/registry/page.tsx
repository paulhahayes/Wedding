"use client";
import WaveAnimation from "@/components/WaveAnimation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { RiFileCopyLine } from "react-icons/ri";
export default function Registry() {
  const copied = () => toast("Copied ✅");

  return (
    <div>
      <Toaster />
      <WaveAnimation reverse={false} />
      <div
        className="w-full sm:h-auto sm:px-4 md:px-36 min-h-[60vh] flex flex-col sm:flex-row 
   border-white shadow-lg  bg-white backdrop-filter backdrop-blur-lg bg-opacity-10"
      >
        <div>
          <p className="px-4 py-4 sm:text-[22px] text-[20px] tracking-wide text-start">
            While we don&apos;t have a traditional gift registry, if you&apos;d
            like to contribute to our honeymoon fund, we would truly appreciate
            it.
            <br />
            <br />
            Please find our bank details below and{" "}
            <span className="underline">
              include your name in the description.
            </span>
          </p>
          <div
            className="w-full h-24 flex items-center flex-row px-4 mt-2 gap-3 backdrop-blur-3xl rounded
           bg-slate-700/30 border-white border text-white sm:text-[20px] min-[330px]:text-[12px] font-bold"
          >
            <CopyToClipboard text="Paul and Ximena" onCopy={copied}>
              <div
                className="relative 
                              group 
                              flex 
                              items-center 
                              rounded-md 
                              w-full
                              px-2
                              h-[64px]
                              bg-neutral-100/10 
                              cursor-pointer 
                              hover:bg-neutral-100/20 
                              transition 
                              "
              >
                <p className="text-[20px] font-bold truncate py-2">
                  Account Name: Paul and Ximena
                </p>

                <div
                  className="
                  absolute 
                  transition 
                  opacity-0 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  bg-blue-300 
                  p-4 
                  drop-shadow-md 
                  right-5
                  group-hover:opacity-100 
                  hover:scale-110
                  "
                >
                  <RiFileCopyLine />
                </div>
              </div>
            </CopyToClipboard>
          </div>

          <div
            className="w-full h-24 flex items-center mt-2 flex-row px-4 gap-3 backdrop-blur-3xl rounded
           bg-slate-700/30 border-white border text-white sm:text-[20px] min-[330px]:text-[12px] font-bold"
          >
            <CopyToClipboard text="018191069" onCopy={copied}>
              <div
                className="relative 
                              group 
                              flex 
                              items-center 
                              rounded-md 
                              w-full
                              px-2
                              h-[64px]
                              bg-neutral-100/10 
                              cursor-pointer 
                              hover:bg-neutral-100/20 
                              transition 
                              "
              >
                <p className="text-[20px] font-bold truncate py-2">
                  Account Number: 018191069
                </p>
                <div
                  className="
                  absolute 
                  transition 
                  opacity-0 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  bg-blue-300 
                  p-4 
                  drop-shadow-md 
                  right-5
                  group-hover:opacity-100 
                  hover:scale-110
                  "
                >
                  <RiFileCopyLine />
                </div>
              </div>
            </CopyToClipboard>
          </div>
          <div
            className="w-full h-24 flex items-center flex-row px-4 mt-2 gap-3 backdrop-blur-3xl rounded
           bg-slate-700/30 border-white border text-white sm:text-[20px] min-[330px]:text-[12px] font-bold"
          >
            <CopyToClipboard text="944600" onCopy={copied}>
              <div
                className="relative 
                              group 
                              flex 
                              items-center 
                              rounded-md 
                              w-full
                              px-2
                              h-[64px]
                              bg-neutral-100/10 
                              cursor-pointer 
                              hover:bg-neutral-100/20 
                              transition 
                              "
              >
                <p className="text-[20px] font-bold truncate py-2">
                  BSB: 944600
                </p>
                <div
                  className="
                  absolute 
                  transition 
                  opacity-0 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  bg-blue-300 
                  p-4 
                  drop-shadow-md 
                  right-5
                  group-hover:opacity-100 
                  hover:scale-110
                  "
                >
                  <RiFileCopyLine />
                </div>
              </div>
            </CopyToClipboard>
          </div>

          <br />
          <p className="px-4 py-4 sm:text-[22px] text-[20px] tracking-wide text-start">
            Your generosity means the world to us, and we look forward to
            sharing our special moments with you.
          </p>
        </div>
      </div>
      <WaveAnimation reverse={true} />
    </div>
  );
}
