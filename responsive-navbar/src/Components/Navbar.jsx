const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICE", link: "/service" },
    { name: "CONTACT", link: "/contact" },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 bg-white">
          Designer
        </div>
        <ul className="md:flex md:items-center">
          
          {Links.map((link) => {
            <li key={link.name} className="">
              <a href={link.link}>{link.name}</a>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
