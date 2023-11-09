import home from "../assets/home-01.png";
import dashboard from "../assets/dashboard-circle.png";
import share from "../assets/Frame.png";
import more from "../assets/more-01.png";
import video from "../assets/video-replay.png";
const SideMini = () => {
  return (
    <div className="hidden lg:flex flex-col items-center h-[650px] w-[60px] pt-5 flex-shrink-0 justify-center rounded-md shadow-md">
        <img className="w-7 h-7 my-5 cursor-pointer" src={home} alt="" />
        <img className="w-7 h-7 my-5 cursor-pointer" src={dashboard} alt="" />
        <img className="w-7 h-7 my-5 cursor-pointer" src={share} alt="" />
        <img className="w-7 h-7 my-5 cursor-pointer" src={video} alt="" />
        <img className="w-7 h-7 my-5 cursor-pointer" src={more} alt="" />
    </div>
  );
};

export default SideMini;
