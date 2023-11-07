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
    <div className="py-10 h-full w-[300px] rounded-md bg-white shadow-xl">
      {/* navBar */}
      <div>
        <div className="flex px-3 py-1 justify-between rounded-md items-center gap-5 shadow-md bg-red-50 mx-2">
          <div className="py-2">
            <input
              type="text"
              name=""
              id=""
              className="px-5 py-1 rounded-md"
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
              fruitesLits.map(item=><div className="my-2 cursor-pointer" key={item.id}>
              <div className="flex gap-5 items-center">
              <img className="w-20 h-14 px-2" src={item.image} alt="" />
              <div className="my-2">
              <Link to={`/${item.id}`}><p className="text-lg font-semibold">{item.name}</p></Link>
              {/* <Link to={`/fruits/${item.id}`}><p className="text-lg font-semibold">{item.name}</p></Link> */}
              <p className=" text-gray-500 font-normal">{item.subTitle}</p>
              </div>
              </div>
              </div>)
            }
          </TabPanel>

          <TabPanel className="mt-10">
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
