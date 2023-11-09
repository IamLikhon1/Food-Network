import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Socialimage from "./MainBodysContent/Socialimage";
import FirstComponent from "./MainBodysContent/FirstComponent";
import SecondComponent from "./MainBodysContent/SecondComponent";
import ThirdComponent from "./MainBodysContent/ThirdComponent";
import Review from "./Review";
import FB from '../assets/facebook.png'
import Linkdin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'
import SmallSidebar from "./MainBodysContent/SmallSidebar";

const MainBody = () => {
  const param = useParams();
  const loader = useLoaderData();
  const [data, setData] = useState({});

  useEffect(() => {
    const singleData = loader?.find((d) => d.id == param.id);
    if (singleData) {
      setData(singleData);
    }
  }, [loader, param.id]);

  return (
    <div className="ml-2 lg:ml-0">
      {/* small */}
      <div className="lg:hidden drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full border text-base font-medium mt-5 px-3 py-1 rounded-md bg-white shadow-sm">
          {/* Page content here */}
          <div  className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3.00439" y="2.91357" width="6" height="6" rx="2" fill="#F36C01" />
                <rect x="3.00439" y="11.0864" width="6" height="6" rx="2" fill="#F36C01" />
                <path d="M10.9956 5.91357C10.9956 4.25672 12.3388 2.91357 13.9956 2.91357H16.9956V5.91357C16.9956 7.57043 15.6525 8.91357 13.9956 8.91357C12.3388 8.91357 10.9956 7.57043 10.9956 5.91357Z" fill="#FFA202" />
                <rect x="10.9956" y="11.0864" width="6" height="6" rx="2" fill="#F36C01" />
              </svg>
              <label htmlFor="my-drawer">Select Food Item</label>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.1687 4.6314L6.97067 9.43337L11.8312 4.56662" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <SmallSidebar/>
          </ul>
        </div>
      </div>
      {/* small */}
      <div className="lg:grid lg:grid-cols-12 pt-2">
        {/* social Img */}
        <div className="col-span-1">
          <Socialimage />
        </div>
        {/* all content */}
        <div className="col-span-11">
          <FirstComponent data={data} />
          <SecondComponent />
          <ThirdComponent data={data} />
        </div>
      </div>
      {/* review */}
      <div>
        <Review />
      </div>
      {/* social */}
      <div className='flex gap-3 lg:hidden pb-5'>
        <img className='w-7 cursor-pointer' src={FB} alt="" />
        <img className='w-7 cursor-pointer' src={Linkdin} alt="" />
        <img className='w-7 cursor-pointer' src={Twitter} alt="" />
      </div>
    </div>
  );
};

export default MainBody;
