import { FaGooglePlus, FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { CiSquareInfo } from "react-icons/ci";
import { AiOutlineAim } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { FcGraduationCap } from "react-icons/fc";
import { FaBuilding } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import Logo from '../assets/admition.jpg';
import Logo1 from '../assets/logo.png';
import logo from './../assets/logonew.png';
// import banner from './../assets/world.png';
// import banner from './../assets/footer-bg.png';
import banner from './../assets/footer-2.png';
import MenuAnimation from "./animata/MenuTransition";
import { Facebook, Instagram, MoveRight, Twitter } from "lucide-react";

const Footer = () => {
  const menuItems = ['Home', 'About', 'Services', 'Contact'];
  const currentYear = new Date().getFullYear();
  
  return (

    <div className="bg-[#28283F]">
      <div className="px-[3vw] py-10 flex lg:justify-start text-white flex-col lg:flex-row gap-4">
        <div className="lg:w-[30%] w-full">
          <img src={logo} alt="" />
          <p className="lg:px-5 px-0"># 507 & 509, 1 ‘D’ Main, 3rd Block, Kalyannagar, HRBR Layout,
            Bangalore – 560 043
            Karnataka , India.</p>
        </div>
        <div className="lg:w-[15%] flex flex-col space-y-2 w-full">
          <h1 className="text-2xl  font-bold">Quick Links</h1>
          <Link className="text-white hover:translate-x-2 transition-all duration-200 flex gap-2 hover:text-[#f8841e]" to='/home'><MoveRight />Home</Link>
          <Link className="text-white hover:translate-x-2 transition-all duration-200 flex gap-2 hover:text-[#f8841e]" to='/about-overview'><MoveRight />About</Link>
          <Link className="text-white hover:translate-x-2 transition-all duration-200 flex gap-2 hover:text-[#f8841e]" to='/nursing'><MoveRight />Courses</Link>
          <Link className="text-white hover:translate-x-2 transition-all duration-200 flex gap-2 hover:text-[#f8841e]" to='/gallery'><MoveRight />Gallery</Link>
          <Link className="text-white hover:translate-x-2 transition-all duration-200 flex gap-2 hover:text-[#f8841e]" to='/contact'><MoveRight />Contact</Link>
        </div>
        <div className="w-[28%] space-y-3">
          <h1 className="text-2xl  font-bold">Contact Info</h1>
          <p>Tel : 080 – 2544 8311, 4120 9299</p>
          <p>Mobile: 9731254588</p>
          <p>Fax : 080 – 2544 6379</p>
          <p className="truncate">Email ID: florenceinstitute@rediffmail.com</p>
          <div className="flex gap-3 items-center">
            <Facebook className="hover:-translate-y-2 cursor-pointer transition-all duration-200"/>
            <Twitter  className="hover:-translate-y-2 cursor-pointer transition-all duration-200"/>
            <FaGooglePlus  className="hover:-translate-y-2 cursor-pointer transition-all duration-200"/>
            <Instagram  className="hover:-translate-y-2 cursor-pointer transition-all duration-200"/>
          </div>
          </div>
        <div className="lg:w-[25%] w-full">
          <iframe loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=flrence%20group%20of%20institution&zoom=10&maptype=roadmap" style={{ border: 0, position: 'relative', zIndex: 2 }} className="rounded-md" ></iframe> <a href="https://www.fluxpromptgenerator.net" style={{ color: 'rgba(0,0,0,0)', position: 'absolute', left: 0, top: 0, zIndex: 0, }} > Prompt Generator </a>
        </div>
      </div>

      <div className="flex justify-center items-center py-5 text-gray-500"><p>© {currentYear}. Florence Institute. All rights reserved.</p></div>

    </div>


  );
};

export default Footer;