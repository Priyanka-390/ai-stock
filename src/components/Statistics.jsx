import React from "react";
import { Statisticsdata } from "./Mapdata";

const Statistics = () => {
  return (
    <div className="relative z-[1] overflow-x-clip">
      <div className="w-[415px] h-[415px] bg-ellipsegradient rounded-full absolute top-[20%] left-[-30%] z-[-1] blur-[200px]"></div>
      <div className="w-[166px] h-[166px] bg-ellipsegradient rounded-full absolute top-[20%] right-0 z-[-1] blur-[200px]"></div>
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <h2 data-aos="zoom-in" className="text-center font-openSans lg:mb-8 font-bold md:text-5xl sm:text-4xl text-3xl text-white md:leading-[60px]">
          <span className=" bg-gradient-to-tr from-[#00FFE1] to-[#6E5DF6] bg-clip-text text-transparent">
            Statistics
          </span>{" "}
          For Today
        </h2>
        <div className="flex flex-row md:pt-20 sm:pt-16 pt-3 justify-center flex-wrap -mx-3">
          {Statisticsdata.map((data, i) => {
            return (
              <div data-aos="zoom-in" key={i} className="md:w-1/3 sm:w-1/2 w-full md:pt-0 pt-5 px-3">
                <div className="flex justify-center">
                    <div className=" bg-gradient-to-b from-[#00FFE1] to-[#6E5DF6] group xl:w-[270px] lg:w-[200px] md:w-[180px] duration-300  w-[150px] h-[150px] md:h-[180px] p-2 xl:h-[270px] lg:h-[200px] rounded-full ">
                      <div className="rounded-full w-full h-full flex justify-center bg-[#010306] items-center">
                        <p className="text-white xl:text-[88.24px] group-hover:bg-gradient-to-tr from-[#00FFE1] to-[#6E5DF6] group-hover:bg-clip-text group-hover:text-transparent lg:text-7xl md:text-6xl text-5xl font-roboto md:leading-[103.41px] font-bold">
                          {data.number}
                        </p>
                      </div>
                    </div>
                </div>
                <p
                  className={`lg:pt-11 sm:pt-6 pt- max-w-[262.52px] lg:leading-[46.8px] mx-auto text-white text-center font-openSans md:leading-[46.8px] lg:text-4xl md:text-3xl text-2xl ${data.style}`}
                >
                  {data.para}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
