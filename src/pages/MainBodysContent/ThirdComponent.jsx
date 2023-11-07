
const ThirdComponent = ({data}) => {
    const {pictureTwo}=data;

    return (
        <div>
            <div className="grid grid-cols-2 gap-5 pb-10">
                 {/* img */}
            <div className="h-full py-5 px-2 rounded-md bg-white">
            <img className="rounded-md h-full" src={pictureTwo} alt="" />
            </div>
           {/* img */}
           {/* text */}
           <div>
            <h4 className="mt-7 font-semibold text-lg">Supports eye health: </h4>
            <p className="text-base text-gray-600 mt-4">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
            <h4 className="mt-7 font-semibold text-lg">Supports eye health: </h4>
            <p className="text-base text-gray-600 mt-4">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
           </div>
           {/* text */}

          
        </div>
        </div>
    );
};

export default ThirdComponent;