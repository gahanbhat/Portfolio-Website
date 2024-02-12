import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#18181b]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-700">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Gahan Bhat
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Computer Science Engineering student with a strong ambition to
          become a proficient web developer. I have a deep passion for crafting
          and launching web applications. My current learning journey
          encompasses HTML, CSS, JavaScript, and React. I'm dedicated to
          creating top-tier, user-friendly websites with a keen focus on
          performance and scalability. I'm actively seeking a web developer role
          where I can contribute innovative solutions and craft compelling web
          experiences.
        </p>
        <div>
          <button className="text-white group border-2 bg-[#18181b] border-green-900 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600 rounded-lg  hover:scale-110 duration-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4  " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
