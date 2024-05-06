import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import trade from "../assets/images/webp/trading.webp"

const Tradesdec = () => {
     const form = useRef();
    const [show, setShow] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        if (document.getElementById('firstName').value !== '' && document.getElementById('email').value !== '' && document.getElementById('massege').value !== '') {
            emailjs
                .sendForm("service_yzpy11v", "template_fhys3lj", form.current, {
                    publicKey: "OXJzU6B2ZpuV82nTr",
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setShow(true)
                        document.body.classList.add("overflow-hidden")
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
        else {
            alert('Please fill in all fields');
        }
    };
    const handlePopupClose = () => {
        // document.querySelectorAll(".input").value == '';
        document.body.classList.remove("overflow-hidden")
        setShow(false)
    }
  return (
      <div className=" relative z-[1] lg:pt-64 md:pt-40 sm:pt-20 pt-10">
      <div className="w-[415px] h-[415px] bg-ellipsegradient rounded-full absolute top-0 md:block hidden left-[-30%] z-[-1] blur-[200px]"></div>
      <div className="w-[415px] h-[415px] bg-ellipsegradient rounded-full md:block hidden absolute bottom-[-10%] left-[-30%] z-[-1] blur-[200px]"></div>
        <div className="w-[346px] h-[346px] bg-ellipsegradient rounded-full absolute top-[-5%] right-[-30%] z-[-1] blur-[200px]"></div>
      <div className="container md:pt-2 max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <h2 className=" font-openSans font-bold md:text-5xl sm:text-4xl text-3xl md:leading-[60px] text-white text-center">
          Take the{" "}
          <span className=" bg-gradient-to-r from-[#00FFE1] to-[#6E5DF6] text-transparent bg-clip-text ">
            first step
          </span>{" "}
          into <span className="lg:block"></span>{" "}
          <span className=" bg-gradient-to-r from-[#00FFE1] to-[#6E5DF6] text-transparent bg-clip-text">
            AI Stock
          </span>{" "}
          Trading
              </h2>
              <p className="md:pt-7 pt-2 sm:text-base font-openSans text-center md:pb-14 pb-4 mb-1 text-[#CCCDCD] font-normal">In a matter of minutes, one of our AI mentors will contact you, No <span className="md:block"></span> Experience Required!</p>
              <div className="flex items-center flex-wrap justify-center md:flex-row flex-col-reverse -mx-3">
                  <div className="md:w-1/2 md-pt-0 pt-4 w-full px-3">
                       <div className="flex md:justify-start justify-center">
                           <div className='bg-gradient-to-br from-[#00FFE1] to-[#6E5DF6] rounded-lg p-[2px] max-w-[558px]'>
                                       <div className='md:p-6 p-2 bg-[#01080E] rounded-lg'>
                                           <h2 className='text-center font-openSans font-semibold text-2xl text-white'>Start Trading with AI Stocks !</h2>
                                           <form ref={form} action="submit" className='pt-8' onSubmit={sendEmail}>
                                               <div className='flex items-center gap-2'>
                            <input type="text" placeholder='First Name' className='p-4 text-white input font-openSans w-full sm:text-base text-sm font-normal bg-transparent border border-white rounded-[4px] outline-none placeholder:text-white border-opacity-70' name="Name" id="firstName" required />
                            <input type="text" placeholder='Last Name' className='p-4 text-white input font-openSans w-full sm:text-base text-sm font-normal bg-transparent border border-white rounded-[4px] outline-none placeholder:text-white border-opacity-70' name="Name" id="lastName" required />
                                               </div>
                                               <input type="text" placeholder='Email' className='p-4 input text-white bg-transparent sm:text-base text-sm font-normal border border-white rounded-[4px] outline-none placeholder:text-white border-opacity-70 w-full mt-2' name="Name" id="email" required />
                                               <div className='bg-transparent border border-white rounded-[4px] border-opacity-70 w-full mt-2 flex'>
                            <div className='flex items-center gap-1 p-4 bg-[#13262C] rounded-l-[4px]'>
                                <select name="" id="" defaultValue={+91} className='bg-transparent border-none rounded-[4px]  w-full h-full outline-none text-white font-openSans sm:text-base text-sm appearance-none cursor-pointer focus:bg-black'>
                                    <option value="">+91</option>
                                    <option value="">+92</option>
                                    <option value="">+93</option>
                                    <option value="">+94</option>
                                </select>
                                <span>
                                    <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6.96484L0.535898 0.964844H7.4641L4 6.96484Z" fill="#D9D9D9" />
                                    </svg>
                                </span>
                            </div>
                            <input type='text' placeholder='Phone Number' className='w-full p-4 input text-white bg-transparent outline-none placeholder:text-white border-opacity-70' />
                                               </div>
                                               <button className='w-full py-3 border border-white rounded-[4px] bg-gradient-to-br from-[#00FFE0] to-[#6E5DF6] mt-2' type="submit">Sign Up</button>
                                           </form>
                                       </div>
                                       {show && (
                                           <div className="fixed w-[300px] h-[200px] bg-white shadow-xl rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 flex flex-col justify-center items-center gap-8 z-30">
                                               <p className="text-xl text-center pTag">submitted successfully!</p>
                                               <button className="bg-gradient-to-br from-[#A456E9] from-15% to-[#8869EF] duration-300 hover:shadow-md hover:from-70% rounded-md py-[14px] px-6 font-Outfit font-semibold text-sm text-white" onClick={handlePopupClose}>Close</button>
                                           </div>
                                       )}
                                   </div>
                       </div>
                  </div>
                  <div className="md:w-1/2 flex md:justify-start justify-center w-full px-3">
                      <img src={trade} alt="trade" />
                  </div>
              </div>
      </div>
    </div>
  );
};

export default Tradesdec;
