import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Socialimage from "./MainBodysContent/Socialimage";
import FirstComponent from "./MainBodysContent/FirstComponent";
import SecondComponent from "./MainBodysContent/SecondComponent";
import ThirdComponent from "./MainBodysContent/ThirdComponent";
import Review from "./Review";

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
      <div className="lg:grid lg:grid-cols-12 pt-2">
      {/* social Img */}
      <div className="col-span-1">
        <Socialimage />
      </div>
      {/* all content */}
      <div className="col-span-11">
         <FirstComponent data={data}/>
         <SecondComponent/>
         <ThirdComponent data={data}/>
      </div>
    </div>
    {/* review */}
    <div>
      <Review/>
    </div>
    </div>
  );
};

export default MainBody;
