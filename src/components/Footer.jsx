import React from "react";
import { Facebookicon } from "./Icons";
import { Footerdata, Footericons } from "./Mapdata";

const Footer = () => {
  return (
    <div className=" lg:py-52 md:py-40 relative z-[1] sm:py-20 pt-14">
   <div className="w-[314px] h-[314px] lg:block hidden bg-ellipsegradient rounded-full absolute bottom-0 right-[-30%] z-[-1] blur-[200px]"></div>
      <div className="w-[346px] h-[346px] bg-ellipsegradient rounded-full absolute bottom-0 left-[-30%] z-[-1] blur-[200px]"></div>
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <div className=" md:flex flex-wrap justify-between items-center md:pt-10 sm:mt-8">
          <div>
            <h2 className=" font-bold md:text-[40px] text-4xl md:text-start text-center md:leading-[54.47px] pb-3 font-openSans text-white">
              AI STOCKS
            </h2>
            <p className=" font-openSans md:text-start text-center font-normal sm:text-base text-sm text-[#CCCDCE]">
              Empowering Your Financial Future{" "}
              <span className="md:block"></span> with Intelligent Investments
            </p>
          </div>
          <div>
            <p className=" font-openSans md:text-start md-pt-0 pt-2 text-center font-semibold text-xl text-white">
              Follow Us on
            </p>
            <div className="flex md:justify-start justify-center gap-3 pt-2">
              {Footericons.map((data, i) => {
                return (
                  <a key={i} href={data.path}>
                    <div className=" bg-gradient-to-b from-[#00FFE1] to-[#6E5DF6] w-[30px] p-[1px] h-[30px] rounded-full ">
                      <div className="rounded-full w-full h-full flex justify-center bg-[#010306] items-center">
                        {data.icon}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex md:py-10 flex-wrap flex-row -mx-3">
          {Footerdata.map((data, i) => {
            return (
              <div key={i} className="md:w-1/2 px-3">
                <p className=" sm:pb-2 sm:mb-1.5 mb-1 pt-md-0 pt-3 md:text-start text-center font-openSans font-bold text-xl text-white">
                  {data.heading}
                </p>
                <p className=" font-openSans md:text-start text-center font-normal sm:text-base text-sm text-[#CCCDCE]">
                  {data.para}
                </p>
              </div>
            );
          })}
        </div>
          </div>
          <div className="w-full h-[1px] bg-footerline md-mt-0 mt-6"></div>
          <div className="container max-w-[1140px] 2xl:max-w-[1320px] md:pb-24 px-3 mx-auto">
          <div className="py-7 md:flex flex-wrap justify-between items-center">
              <div className="flex md:justify-start justify-center"><a href="" className=" font-openSans hover:text-white duration-300  font-normal sm:text-base text-sm text-[#CDD0D0]">Privacy Policy | Conditions</a></div>
              <div className="flex md:justify-start justify-center"><a href="" className=" font-openSans hover:text-white duration-300 font-normal sm:text-base text-sm text-[#CDD0D0]">Report Abuse/ Spam | Copyright@2024</a></div>
              </div>
              </div>
    </div>
  );
};

export default Footer;
