import React from "react";

const TopHeader = () => {
  return (
    <div>
      <div className="bg-[#006834] hidden lg:block w-[100%]">
        <div className="container mx-auto ">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row text-[12px] font-medium">
              <p className="text-[rgba(255,255,255,0.6)] px-4">
                <i className="fas fa-phone-alt px-1"></i>
                Phone no: <span className="text-white">+977-9881336356</span>
              </p>
              <p className="text-[rgba(255,255,255,0.6)]">
                <i className="fas fa-envelope px-1"></i>
                email us:
                <span className="text-white px-1">abcd@gmail.com</span>
              </p>
            </div>

            <div className="flex flex-row text-white">
              <p>
                <i className="fab fa-facebook-square px-2"></i>
              </p>
              <p>
                <i className="fab fa-instagram-square px-2"></i>
              </p>
              <p>
                <i className="fab fa-twitter-square px-2"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
