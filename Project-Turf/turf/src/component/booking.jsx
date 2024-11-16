import { useEffect, useState } from "react";

const ProjectCard = ({ title, desc, cover, avai, link, price }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[80%] px-5 h-[100%] shadow-xl flex flex-col items-center">
          <div className="w-[80%] h-[50%]">
            <img src={cover} alt={title} className="h-[100%] w-[100%] relative" />
          </div>

          <div className="font-bold text-2xl group-hover:text-white text-black/80 h-[10%]">
            {title}
          </div>
          <div className="text-gray-400 text-sm h-[25%]">
            {desc}
          </div>
          <div className="font-bold text-2xl group-hover:text-white text-black/80 h-[20%] w-full">
            <div className="flex flex-row h-full w-full">
              <div className="flex items-center justify-start px-10 w-[50%] h-[100%]">
                AVAILABLE SEATS: {avai}
              </div>
              <div className="flex items-center justify-start px-10 w-[50%] h-[100%]">
                PRICE: {price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
