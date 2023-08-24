import "./diamond.css";
import React from "react";
import rhombus from "../../../public/diamond-svgrepo-com.svg";
import Image from "next/image";
import Diamond from "./diamond";
export default function Test() {
  return (
    <>
      <div className="relative h-full w-full">
        <div className="flex w-full justify-center -mb-[100px]">
          <Diamond />
          <Diamond />
        </div>
        <div className="flex z-auto justify-center">
          <div className="flex justify-center">
            <Diamond />
            <Diamond />
            <Diamond />
          </div>
        </div>
        <div className="flex w-full justify-center bottom-0 z-0 -mt-[200px]">
          <div className="flex justify-center items-center">
            <Diamond />
            <Diamond />
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <div className="flex flex-col relative items-center justify-end">
          <div
            id="diamond-narrow"
            className={`relative top-[-50px] hover:opacity-100 rounded-t-2xl bg-[url(/1.png)]`}
          ></div>
          <div className="absolute -bottom-[80px]">asdadad</div>
        </div>
        <div className="flex flex-col relative items-center justify-end">
          <div
            id="diamond-narrow"
            className="relative top-[-50px] hover:opacity-100"
          ></div>
          <div className="absolute -bottom-[80px]">asdadad</div>
        </div>
      </div> */}
    </>
    // <div className="ag-format-container w-1142 mx-auto">

    //   <div className="ag-grid_list mt-12 ml-[7%] pb-20 overflow-hidden">
    //     {/* Repeat this structure for each grid item */}
    //     <div className="ag-grid_item inline-block w-1/5 ml-11 mt-1 pb-[20%] bg-teal-400 transform rotate-45 relative overflow-hidden transition duration-500">
    //       <div className="ag-grid_info rotate-45 relative">
    //         <div className="ag-grid_title bg-black bg-opacity-95 text-white w-150% ml-[-60%] mt-[-40%] pb-[150%] z-2 absolute top-0 left-0">
    //           <a
    //             href="#"
    //             className="ag-grid_link underline text-white"
    //             target="_blank"
    //           >
    //             Lorem
    //           </a>
    //           <div className="ag-grid_divid bg-teal-400 border border-teal-400 absolute top-[54%] left-0 right-0 rotate-45"></div>
    //         </div>
    //         <img
    //           src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-1.svg"
    //           className="ag-grid_img w-60% z-1 absolute top-0 left-[-15%]"
    //           alt=""
    //         />
    //       </div>
    //       <div className="ag-grid_btn absolute bottom-0 right-0 transform transition duration-500">
    //         <div className="h-12 w-12 border border-teal-400 cursor-pointer"></div>
    //         <div className="h-2 w-30 absolute top-[50%] left-[50%] rotate-45 bg-teal-400 transform transition duration-500"></div>
    //         <div className="h-30 w-2 absolute top-[50%] left-[50%] rotate-45 bg-teal-400 transform transition duration-500"></div>
    //       </div>
    //     </div>
    //     {/* Repeat this structure for each grid item */}
    //   </div>
    // </div>
  );
}
