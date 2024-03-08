import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation()

  const links = [
    {
      id: 1,
      link: "/",
      title: "home"
    },
    {
      id: 2,
      link: "/about",
      title: "about"
    },
    {
      id: 3,
      link: "/services",
      title: "services"
    },
    {
      id: 4,
      link: "/contact",
      title: "contact"
    },
  ];
  return (
    <div className="flex justify-between z-10 items-center w-full h-20 text-secondary bg-secondary-pink fixed md:pr-4">
        <img
        src="./assets/SmallLogo.svg"
        className="md:w-36 md:h-36 w-24 h-24"
        alt="Logo"
        />
      <div className="">
        <ul className="hidden md:flex gap-4">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className={`cursor-pointer capitalize font-medium hover:text-secondary-400 ${location.pathname === `${link}` ? 'text-primary-green border-b-4 border-primary-green': ''}`}
            >
             <Link to={`${link}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-secondary md:hidden"
      >
        {nav ? <FaTimes size={30} style={{ color: "#877EFF"}} /> : <FaBars size={30} style={{ color: "#877EFF"}} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-secondary-pink text-secondary">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <div
                onClick={() => setNav(false)}
              >
                <Link to={`${link}`} className={`${location.pathname === `${link}` ? 'text-primary-green border-b-4 border-primary-green': ''}`}>
                {title}
              </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
