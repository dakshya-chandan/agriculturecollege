import React from "react";

const Welcome = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row space-x-2 text-white py-4">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div style={{ color: "#0a0808d1" }} className="">
            <p className="font-medium" style={{ fontSize: "3rem" }}>
              Welcome to our University
            </p>
            <p className="text-gray-600" style={{ marginTop: "8px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis itaque quisquam nesciunt recusandae quidem eos
              voluptatem fugit pariatur quasi reprehenderit temporibus non
              exercitationem, facilis impedit voluptate expedita error mollitia
              maxime dignissimos? Natus harum quod esse!
            </p>
            <button className="bg-[#006834] text-white mt-4 px-3 py-1 rounded-md shadow-lg">
              Readmore
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            className="rounded-lg"
            style={{ width: "100%" }}
            src="https://images.unsplash.com/photo-1600367572572-02e4c7238b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWdyaWN1bHR1cmFsJTIwY29sbGVnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="children"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
