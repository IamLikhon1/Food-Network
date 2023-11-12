import { IoIosArrowUp } from "react-icons/io";
import square from "../assets/text-square.png";
const Filter = () => {
  return (
    <div className="hidden lg:block rounded-md bg-white shadow-xl py-10 px-4 w-full">
      <div className="flex justify-between items-center text-lg">
        <div className="flex gap-3 items-center">
          <img src={square} alt="" />
          <h2 className="text-[#E55527] font-medium">Settings</h2>
        </div>
        <div>
          <IoIosArrowUp className="text-[#E55527] font-medium" />
        </div>
      </div>
      {/* range */}
      <div className="mt-5">
        <h2 className="text-base font-medium">Paragraph font size</h2>
        <input type="range" className="cursor-pointer w-full mt-3" />
      </div>

      {/* dropDown */}
      <div className="mt-5">
        <h2 className="text-base font-medium">Choose Vitamin Type</h2>
        <div className="form-control w-full my-3">
          <select className="select select-bordered">
            <option disabled selected>
              All Vitamin
            </option>
            <option value='Vitamin A'>Vitamin A</option>
            <option value='Vitamin B'>Vitamin B</option>
            <option value='Vitamin C'>Vitamin C</option>
            <option value='Vitamin D'>Vitamin D </option>
            <option  value='Vitamin E' >Vitamin E</option>
            <option  value='Vitamin K'>Vitamin K</option>
          </select>
        </div>
      </div>

      {/* dubTitle */}
      <div>
        <div className="form-control">
          <label className="label cursor-pointer ">
            <span className="label-text text-base font-medium">Turn Off Subtitle</span>
            <input type="checkbox" className="toggle" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
