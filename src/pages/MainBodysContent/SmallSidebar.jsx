import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const SmallSidebar = () => {
  //   const [fruitsLits,setFruitsLits]=useState([]);
  // useEffect(()=>{
  //   fetch('fruites.json')
  //   .then(res=>res.json())
  //   .then(data=>setFruitsLits(data))
  // },[]);

  const {data:fruitsLits}=useQuery({
    queryKey:['fruitsData'],
    queryFn:async ()=>{
      const res=await fetch('fruites.json')
      return res.json();
    }
  })
    return (
        <div>
            <div className="lg:block h-full w-full rounded-md bg-white shadow-xl pt-2 ">
      {/* navBar */}
     
      {/* Tab */}
      <div className="mt-5 px-3">
        <Tabs>
          <TabList className="flex p-2 items-center justify-center gap-5 ">
            <Tab className='border bg-pink-200 px-8 py-2 rounded-md shadow-sm items-center cursor-pointer hover:bg-red-300 duration-300'>Fruits</Tab>
            <Tab className='border bg-pink-200 px-8 py-2 rounded-md shadow-sm items-center cursor-pointer hover:bg-red-300 duration-300' >Vegetables</Tab>
          </TabList>

          <TabPanel className="mt-7">
            {
              fruitsLits?.slice(0,8).map(item=><div className="my-2 cursor-pointer" key={item.id}>
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
              fruitsLits?.slice(8,18).map(item=><div className="my-2 cursor-pointer" key={item.id}>
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
        </div>
    );
};

export default SmallSidebar;