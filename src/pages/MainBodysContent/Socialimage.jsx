import FB from '../../assets/facebook.png'
import Linkdin from '../../assets/linkedin.png'
import Twitter from '../../assets/twitter.png'
const Socialimage = () => {
    return (
        <div className='flex flex-col gap-5 pt-16'>
            <img className='w-7 cursor-pointer'  src={FB} alt="" />
            <img className='w-7 cursor-pointer' src={Linkdin} alt="" />
            <img className='w-7 cursor-pointer' src={Twitter} alt="" />
        </div>
    );
};

export default Socialimage;