import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative grid grid-cols-4 min-h-[25rem] max-h-[25rem]  text-center bg-[#006834] gap-4 md:grid-cols-4 sm:grid-cols-1 bg-violet-500 text-gray-50 p-14 sm:p-8">
      <div>
        <img
          src="https://t4.ftcdn.net/jpg/02/76/16/83/360_F_276168355_zmVzjAFYyAMi8eN3kN3NA1bVkuTxycan.jpg"
          alt="logo"
          className="mx-auto w-[90%] h-[45%]"
        />

        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quis
          qui rerum laboriosam, tenetur totam est eum quibusdam ut quos ratione
          perferendis labore accusantium quidem?
        </p>
        <div className="flex flex-row gap-4 px-2 py-4">
          <div className="flex-1">
            <i className="fab fa-facebook-square text-2xl text-gray-100"></i>
          </div>
          <div className="flex-1">
            <i className="fas fa-envelope text-2xl text-gray-100"></i>
          </div>
          <div className="flex-1">
            <i className="fab fa-twitter-square text-2xl text-gray-100"></i>
          </div>
          <div className="flex-1">
            <i className="fab fa-linkedin text-2xl text-gray-100"></i>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl">Quicks Links</p>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          20000+
          <li>
            <Link href="/">Events</Link>
          </li>
          <li>
            <Link href="/">Academics</Link>
          </li>
          <li>
            <Link href="/">Blogs</Link>
          </li>
          <li>
            <Link href="/">Foods</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-xl">Quicks Links</p>
        <ul>
          <li>
            <Link href="/">About us</Link>
          </li>
          <li>
            <Link href="/">Notices</Link>
          </li>
          <li>
            <Link href="/">events</Link>
          </li>
          <li>
            <Link href="/">blogs</Link>
          </li>
          <li>
            <Link href="/">contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-xl">Location</p>
        <div>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.4372360235343!2d85.92350431465849!3d26.73041988320648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec40069de3d507%3A0x5e9842f10a951d7f!2sJanaki%20Temple!5e0!3m2!1sen!2snp!4v1638859066007!5m2!1sen!2snp"
            width="300"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
