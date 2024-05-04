import { useState } from "react";
import Button from "./Button";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICE", link: "/service" },
    { name: "CONTACT", link: "/contact" },
  ];
  const[open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 ">
          Designer
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          {
            !open && <CiMenuBurger /> 
          }
          { open && <IoIosCloseCircleOutline/>}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
          {Links.map((link) => (
            <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-500 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>GET BUTTON</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
