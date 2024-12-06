import { FaArrowAltCircleUp } from "react-icons/fa";

const Scroller = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // <div className='bg-[#353688] w-full h-[60px] flex flex-col justify-between b'>
    //   <div className="text-center text-sm  text-white flex justify-center items-center ">
    //     <p>© {currentYear}. Florence Institute. All rights reserved.</p>
    //   </div>

    // </div>

    <div className="fixed bottom-4 right-4">
      <button
        onClick={scrollToTop}
        className="bg-[#f8841d] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#eb8e3c] transition duration-300"
      >
        <FaArrowAltCircleUp className="size-16" />
      </button>
    </div>
  );
};

export default Scroller;