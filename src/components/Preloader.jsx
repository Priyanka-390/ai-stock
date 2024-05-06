import React from "react";

const Preloader = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-black fixed flex flex-col justify-center items-center start-0 end-0">
      <div>
        <p className="text_animate inline-flex uppercase text-center md:text-7xl sm:text-5xl text-4xl font-semibold font-openSans scale-[.5] text-transparent bg-clip-text bg-gradient-to-r from-[#00FFE1] to-[#6E5DF6]">
          A
        </p>
        <p className="text_animate inline-flex uppercase text-center md:text-7xl sm:text-5xl text-4xl font-semibold font-openSans scale-[.5] text-transparent bg-clip-text bg-gradient-to-r from-[#00FFE1] to-[#6E5DF6]">
          I
        </p>
        <p className="text_animate inline-flex uppercase text-center md:text-7xl sm:text-5xl text-4xl font-semibold font-openSans scale-[.5] text-transparent bg-clip-text bg-gradient-to-r from-[#00FFE1] to-[#6E5DF6] ">
          -
        </p>
        <p className="text_animate inline-flex uppercase text-center md:text-7xl sm:text-5xl text-4xl font-semibold font-openSans scale-[.5] text-transparent bg-clip-text bg-gradient-to-r from-[#00FFE1] to-[#6E5DF6]">
          S
        </p>
        <p className="text_animate inline-flex uppercase text-center md:text-7xl sm:text-5xl text-4xl font-semibold font-openSans scale-[.5] text-transparent bg-clip-text bg-gradient-to-r from-[#00FFE1] to-[#6E5DF6]">
          T
        </p>
        <p className="text_animate inline-flex uppercase text-center md:text-7xl sm:text-5xl text-4xl font-semibold font-openSans scale-[.5] text-transparent bg-clip-text bg-gradient-to-r from-[#00FFE1] to-[#6E5DF6]">
          o
        </p>
        <p className="text_animate inline-flex uppercase text-center md:text-7xl sm:text-5xl text-4xl font-semibold font-openSans scale-[.5] text-transparent bg-clip-text bg-gradient-to-r from-[#00FFE1] to-[#6E5DF6]">
          c
        </p>
        <p className="text_animate inline-flex uppercase text-center md:text-6xl sm:text-5xl text-4xl font-semibold font-openSans scale-[.5] text-transparent bg-clip-text bg-gradient-to-r from-[#00FFE1] to-[#6E5DF6]">
          k
        </p>
      </div>
    </div>
  );
};

export default Preloader;
