import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const Links = [
    { name: "Services", link: "/" },
    { name: "Industries", link: "/" },
    { name: "Clients", link: "/" },
    { name: "About us", link: "/about-us" },
    { name: "Insights", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <section className="shadow w-full">
      <div className="md:flex justify-between items-center py-4 md:px-8 px-4">
        <div className="bg-white text-3xl font-bold">
          <h1>HORIZON</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-black absolute right-8 top-6 md:hidden cursor-pointer"
        >
          {open ? <IoCloseSharp size={25} /> : <IoMenuSharp size={25} />}
        </div>
        <ul
          className={`md:flex justify-between md:items-center md:pb-0 pb-12 text-black absolute md:sticky md:z-auto left-0 w-full md:auto md:pl-0 pl-6 transition-all duration-500 ease-in ${
            open ? "top-15 opacity-100" : "top[-490px]"
          } bg-white md:bg-transparent md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-14 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-black text-xl hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button className="px-6 py-2 bg-black text-green-500 rounded-md">
            Estimate project
          </button>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
