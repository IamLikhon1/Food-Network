import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import glass from "../assets/searchGlass.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Category = () => {
  const [fruitesLits,setFruitesLits]=useState([]);
  useEffect(()=>{
    fetch('fruites.json')
    .then(res=>res.json())
    .then(data=>setFruitesLits(data))
  },[]);

  return (
    <div className="hidden lg:block h-full w-full rounded-md bg-white shadow-xl pt-2 ">
      {/* navBar */}
      <div>
        <div className="hidden lg:flex  justify-between rounded-md items-center gap-5 shadow-md bg-red-50 mx-2">
          <div className="py-2 px-3">
            <input
              type="text"
              name=""
              id=""
              className="px-3 py-1 rounded-md"
              placeholder="Search Best Food"
            />
          </div>

          <>
            <img className="w-8 cursor-pointer" src={glass} alt="" />
          </>

        </div>
      </div>
      {/* Tab */}
      <div className="mt-5 px-3">
        <Tabs>
          <TabList className="flex p-2 items-center justify-center gap-5 ">
            <Tab className='border bg-pink-200 px-8 py-2 rounded-md shadow-sm items-center cursor-pointer hover:bg-red-300 duration-300'>Fruits</Tab>
            <Tab className='border bg-pink-200 px-8 py-2 rounded-md shadow-sm items-center cursor-pointer hover:bg-red-300 duration-300' >Vegetables</Tab>
          </TabList>

          <TabPanel className="mt-7">
            {
              fruitesLits.slice(0,8).map(item=><div className="my-2 cursor-pointer" key={item.id}>
             <Link to={`/${item.id}`}>
              <div className="flex gap-5 items-center hover:shadow-lg duration-500">
              <img className="w-20 h-14 px-2" src={item.image} alt="" />
             <div className="my-2">
              <p className="text-lg font-semibold hover:text-orange-300 duration-500 cursor-pointer">{item.name}</p>
              <p className=" text-gray-500 font-normal">{item.subTitle}</p>
              </div>
              </div>
             </Link>
              </div>)
            }
          </TabPanel>

          <TabPanel className="mt-10">
            {
              fruitesLits.slice(8,18).map(item=><div className="my-2 cursor-pointer" key={item.id}>
             <Link to={`/${item.id}`}>
              <div className="flex gap-5 items-center hover:shadow-lg duration-500">
              <img className="w-20 h-14 px-2" src={item.image} alt="" />
             <div className="my-2">
              <p className="text-lg font-semibold hover:text-orange-300 duration-500 cursor-pointer">{item.name}</p>
              <p className=" text-gray-500 font-normal">{item.subTitle}</p>
              </div>
              </div>
             </Link>
              </div>)
            }
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
