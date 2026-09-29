import BannEr from "../banner-main.png"
import React from 'react';

const Banner = () => {
     return (
    <section className="
      relative
      mx-auto
      max-w-6xl
      overflow-hidden
      rounded-3xl
      bg-black
      p-20
      flex
      flex-col
       justify-center 
       items-center
    ">

      {/* Blue glow */}
      <div className="
        absolute
        -bottom-32
        -left-32
        h-96
        w-96
        rounded-full
        bg-blue-400/40
        blur-3xl
      " />

      {/* Red glow */}
      <div className="
        absolute
        -right-32
        -top-32
        h-96
        w-96
        rounded-full
        bg-pink-300/40
        blur-3xl
      " />

      {/* Content */}
      <div className="relative z-10
      flex flex-col items-center text-center">
        <img src={BannEr} alt="Banner" />
        <div className="max-w-5xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-4 ">
        <h2>Assemble Your Ultimate Dream 11 Cricket Team</h2>
        
        <p className="mt-4 text-base font medium  sm:text-lg text-gray-400/90">Beyond Bounderies Beyond Limits</p>

      <div className="flex justify-center items-center text-center">
          <button className="mt-7 rounded-2xl border-2 border-yellow-300 bg-gradient-to-r from-pink-300 via-yellow-100 to-amber-300 px-10 py-4.5 font-semibold text-black  outline-2 outline-offset-6 outline-white transition hover:bg-yellow-300
          flex justify-center items-center text-center">Claim Free Credit</button>
      </div>
        </div>
     
    
      </div>

    </section>
  );
};

export default Banner;