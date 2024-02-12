import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#18181b] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/d15351f2-fe4f-42e2-a1d0-5ac722b9f8cc"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-2 border-green-900 rounded-md text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - gahanbhat@gmail.com
          </p>
        </div>
        <input
          className="bg-zinc-800 p-2  text-zinc-400 rounded-md "
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-zinc-800 text-zinc-400 rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-zinc-800 p-2 text-zinc-400 rounded-md"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 bg-[#18181b] border-green-900  hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center  rounded-lg hover:scale-105 duration-300 ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};
export default Contact;
