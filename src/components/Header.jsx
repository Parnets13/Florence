import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import phone from './../assets/Animation - 1732529597296.json';
import location from './../assets/Animation - 1732529717912.json';
import search from './../assets/Animation - 1732531203501.json';




const Header = () => {
  return (
    <div className="bg-[#E8E8F4] w-full px-4 py-2 ">


      {/* Contact Information */}
      <div className="flex flex-col lg:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-6  w-full md:w-auto lg:justify-between lg:items-center  px-[3vw] ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
          <div className="flex items-center space-x-2">
            <Lottie animationData={phone} className="size-10" />
            <Link to="tel:+9108025448311" className="text-sm font-medium ">
              +91 080-2544 8311, 4120 9299, 9731254588
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Lottie animationData={location} className="size-9 mt-2" />
            <p className="text-sm font-medium"># 507 & 509, 1 ‘D’ Main, 3rd Block, Kalyannagar, HRBR Layout</p>
          </div>
        </div>

        {/* <div className="border border-[#89216b] bg-transparent  flex justify-between px-2 rounded-md items-center">
          <input type="text" className="bg-transparent outline-none rounded-md border-none focus:outline-none " />
          <Lottie animationData={search} className="size-7" />
        </div> */}
        
      </div>
    </div>
  );
};

export default Header;