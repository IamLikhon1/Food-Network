import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar";
import SideMini from "../pages/SideMini";
import Category from "../pages/Category";
import Filter from "../pages/Filter";

const Main = () => {
  return (
    <div>
      <div>
        <NavBar />

        <div className="flex">
          <div>
            <SideMini />
          </div>
          <div className="grid lg:grid-cols-12 lg:mt-14">
            {/* side mini bar */}
            {/* category */}
            <div className="col-span-2 mx-2">
              <Category />
            </div>

            {/* main body */}

            <div className="col-span-7 mx-2">
              <Outlet />
            </div>

            {/* filter */}

            <div className="col-span-3 mx-2">
              <Filter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
