import React from "react";
import nividia from "../assets/images/webp/nividia.webp"

const Gpusec = () => {
  return (
    <div className=" relative z-[1] lg:py-64 md:py-40 sm:py-20 py-10">
            <div className="w-[346px] h-[346px] bg-ellipsegradient rounded-full absolute bottom-0 left-[-30%] z-[-1] blur-[200px]"></div>
      <div className="relative z-10 before:absolute before:top-[50%] before:left-0 after:-z-10 before:-z-10 before:rotate-180 before:right-[58%] before:h-[3px] before:bg-leftlinegradient after:absolute after:top-[50%] after:right-0 after:left-[58%] after:h-[3px] after:bg-rightlinegradient ">
        <h1 className=" font-bold md:pt-4 font-openSans lg:text-[70px] md:text-6xl text-5xl md:leading-[87.5px] text-white text-center">
          Top 7{" "}
        </h1>
        <h2 className="font-bold md:text-5xl text-4xl  md:leading-[60px] bg-gradient-to-b from-[#00FFE1] to-[#6E5DF6] text-transparent bg-clip-text text-center font-openSans">
          AI Stocks 
        </h2>
      </div>
      <div className="container max-w-[1140px] px-3 mx-auto">
        <div className="flex md:flex-row items-center lg:pt-20 md:pt-16 pt-6 pb-3 flex-wrap -mx-3 flex-col-reverse">
          <div className="md:w-7/12 md:pt-0 pt-4 px-3">
            <h2 className=" font-openSans md:text-start text-center font-bold md:text-4xl sm:text-3xl text-2xl text-white md:leading-[46.8px]">
              Nvidia - AI GPU <span className="md:block"></span>{" "}
              <span className=" bg-clip-text text-transparent bg-gradient-to-t to-[#00FFE1] from-[#6E5DF6]">
                1 year 228%
              </span>{" "}
              Growth 
                      </h2>
                      <p className=" font-openSans font-normal lg:pt-7 md:pt-5 pt-2 md:text-start text-center sm:text-base text-sm max-w-[557px] text-[#CCCDCD] md:leading-[25.6px]">NVIDIA Corporation, a powerhouse in GPU technology and AI innovation, offers investors compelling opportunities. With dominance in gaming and data center markets, NVIDIA stands poised for growth. Diversification efforts into AI, autonomous vehicles, and strategic acquisitions further bolster its potential. As a leader in technology and with a strong financial track record, NVIDIA remains a top choice for savvy investors.</p>
                  </div>
                  <div className="md:w-5/12 px-3">
                      <img src={nividia} alt="nividia" />
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Gpusec;
