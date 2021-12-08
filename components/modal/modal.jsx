import React from "react";

const Modal = ({ closemodal }) => {
  return (
    <div id="modalsection" className="absolute top-0 left-[30%] z-50">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div className="max-w-md mx-auto">
            <span
              onClick={closemodal}
              className="text-green-600 hover:text-green-800 absolute top-5 right-4 text-4xl"
            >
              <i className="far fa-times-circle"></i>
            </span>
            <center>
              <p className="text-4xl text-green-600 font-semibold">Notice</p>
            </center>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
