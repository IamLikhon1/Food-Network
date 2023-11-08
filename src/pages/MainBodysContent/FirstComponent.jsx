
const FirstComponent = ({data}) => {
    const {name,pictureOne}=data;
    return (
        <div className="grid grid-cols-2">
           {/* text */}
           <div>
           <h2 className="text-3xl font-extrabold">Health Benefits of An {name}</h2>
            <h4 className="mt-7 font-semibold text-lg">Supports eye health: </h4>
            <p className="text-base text-gray-600 mt-4">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
            <h4 className="mt-7 font-semibold text-lg">Supports eye health: </h4>
            <p className="text-base text-gray-600 mt-4">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
           </div>
           {/* text */}

           {/* img */}
            <div className="h-full py-5 px-2 rounded-md bg-white">
            <img className="rounded-md h-fit w-fit" src={pictureOne} alt="" />
            </div>
           {/* img */}
        </div>
    );
};

export default FirstComponent;