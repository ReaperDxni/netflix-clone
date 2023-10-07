import NavBarItem from "./NavBarItem";
import NavBarIconItem from "./NavBarIconItem";
import { ImSearch } from "react-icons/im";
import { FaBell } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
export default function NavBar() {
  return (
    <nav className="w-full h-20 bg-gradient-to-b from-black to-zinc-900 flex items-center justify-between">
      <div className="space-x-8 ml-20">
        <a className="text-2xl font-bold text-red-600 cursor-pointer uppercase">
          Njetflix
        </a>
        <NavBarItem name="Home" url="/" />
        <NavBarItem name="TV Shows" url="/" />
        <NavBarItem name="Movies" url="/" />
        <NavBarItem name="New & Popular" url="/" />
        <NavBarItem name="My List" url="/" />
      </div>
      <div className="flex items-center mr-20 space-x-8">
        <NavBarIconItem>
          <ImSearch />
        </NavBarIconItem>
        <NavBarItem name="DVD" url="/" />
        <NavBarIconItem>
          <FaBell />
        </NavBarIconItem>
        <div className="flex space-x-3">
          <div
            className="w-[44px] h-[44px] bg-center bg-cover rounded-sm"
            style={{
              backgroundImage: `url("https://static.vecteezy.com/ti/gratis-vektor/p3/22726411-patrick-star-im-spongebob-schwammkopf-kostenlos-vektor.jpg")`,
            }}
          ></div>
          <span className="text-sm  mt-2 cursor-pointer text-gray-300 hover:text-white">
            <BsChevronDown />
          </span>
        </div>
      </div>
    </nav>
  );
}
