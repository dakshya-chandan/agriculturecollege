import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center h-[6rem]">
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/02/76/16/83/360_F_276168355_zmVzjAFYyAMi8eN3kN3NA1bVkuTxycan.jpg"
            alt=""
            className="object-cover w-[10rem] h-[6rem] py-1"
          />
        </div>
        <div className="text-gray-600 font-bold">
          <ul>
            <li className="inline-block mr-3 text-[#006834]">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/aboutus">
                <a>About us</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/admission">
                <a>Admission</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/acedemics">
                <a>Acedemics</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/gallery">
                <a>Gallery</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/events">
                <a>Events</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/notices">
                <a>Notices</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/contact">
                <a>Contact us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
