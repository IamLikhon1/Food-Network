import { Link } from "react-router-dom";
import logo from "../assets/Frame 865.png";
import sunLogo from "../assets/Frame 767.png";
import control from "../assets/Frame 769.png";
import bar from "../assets/menu-01.png";
import glass from "../assets/searchGlass.png";
// import { useState } from "react";
// import { HiMenuAlt2 } from "react-icons/hi";
// import { IoMdCloseCircleOutline } from "react-icons/io";

const NavBar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <div>
        {/* lg device start */}
        <div className="w-full">
          <div className="container mx-auto hidden lg:block ">
            {/* lg navbar section start */}
            <div className="grid grid-cols-12 py-1 mx-4 mt-5 items-center">
              <div className="col-span-1 flex items-center  justify-center">
                <Link to={"/"} className="w-[150px] py-2 px-4 rounded-lg">
                  <img src={logo} alt="" />
                </Link>
              </div>

              <div className="col-span-8 flex items-center justify-center">
                <div className="flex px-10 py-1 justify-between rounded-md items-center gap-5 shadow-md border border-black">
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="px-4 py-2 rounded-md"
                      placeholder="Search Best Food"
                    />
                  </div>
                     <div className="">
                  <img className="w-8 cursor-pointer" src={glass} alt="" />

                  </div>
                 
                </div>
              </div>

              <div className="col-span-3 flex items-center justify-end gap-5 cursor-pointer">
                <img src={sunLogo} alt="" />
                <img src={control} alt="" />
                <img src={bar} alt="" />
              </div>
              {/* lg navbar section end */}
            </div>
          </div>
        </div>
        {/* lg device end */}

        {/* sm device start */}

        <div className="lg:hidden block mt-5">
          <div className="cursor-pointer grid grid-cols-12 items-center justify-center h-8">
            {/* <div
              onClick={'toggleMenu'}
              className="col-span-2 flex items-starts justify-center"
            >
              <HiMenuAlt2 className="w-9 h-9 text-black ms-1" />
            </div> */}
            <Link
              to={"/"}
              className="col-span-12 flex items-center justify-center"
            >
              <img className="w-[70px]" src={logo} alt="" />
            </Link>
            {/* <div className="col-span-2 mr-1">
              <p className="text-[#0076CE] font-bold rounded-lg border-2 border-blue-500 py-2 w-full text-center text-xs">
                Login
              </p>
            </div> */}
            <div
              // className={
              //   menuOpen
              //     ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen p-10 ease-in-out duration-500 bg-slate-200"
              //     : "fixed left-[-100%] top-0 p-10 sm:hidden h-screen ease-in-out duration-500"
              // }
            >
              {/* cross sine */}
              {/* <div className="flex w-full items-center justify-between">
                <div>
                  <Link className="/">
                    <img className="w-[100px]" src={logo} alt="" />
                  </Link>
                </div>
                <div onClick={toggleMenu} className="cursor-pointer">
                  <IoMdCloseCircleOutline className="h-6 w-6 text-white" />
                </div>
              </div> */}

              {/* mobile device menu */}
              <div className="flex-col py-3 font-medium text-white mt-4">
                {/* something */}
              </div>
            </div>
          </div>
        </div>

        {/* sm device end */}
      </div>
    </div>
  );
};

export default NavBar;
