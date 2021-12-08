import React from "react";

const Counter = () => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWdyaWN1bHR1cmUlMjBpbnN0aXR1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")',
        }}
        className="parallax"
      ></div>
      <div className=" absolute top-0 mt-4">
        <div className="grid grid-cols-4 space-x-4 w-full px-6">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto h-[10rem]">
            <div
              className="relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
              style={{ backdropFilter: "blur(20px)" }}
            >
              <div className="max-w-md mx-auto">
                <div className="divide-y divide-gray-200">
                  <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <p className="text-4xl font-bold">1000+ students</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
