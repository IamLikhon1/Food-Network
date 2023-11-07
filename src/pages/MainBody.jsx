import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";

const MainBody = () => {
    const param = useParams()
    const loader = useLoaderData()
    const [data, setData] = useState({})


    useEffect(() => {
        const singleData = loader?.find(d => d.id == param.id)
        if (singleData) {
            setData(singleData)
            
        }
    }, [loader,param.id]);
    
    return (
        <div className='bg-green-500'>
            <h2>Main Body {data?.name}</h2>
            
        </div>
    );
};

export default MainBody;