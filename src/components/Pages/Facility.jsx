import React from 'react';
import Facilityimage from '../../components/Pages/subpages/facilityimage';
import Animatetex from './subpages/Animatedtext'

const Facilities = () => {
  return (
    <div className="container mx-auto p-6 relative shadow-2xl rounded-lg bg-white">
      <h1 className="text-3xl font-bold text-center mb-8"><Animatetex/></h1>

      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row gap-8">

        {/* Content Section */}
        <div className="flex-1 md:flex-[0_0_40%]">
          <p className="mb-4">
            Florence institution has established excellent infrastructure. We have good buildings which are situated in an excellent locality of Bangalore and are away from the noisy environment.
          </p>
          <p className="mb-4">
            Each course has a separate block with good facilities for library, laboratories, classrooms, and offices. Computer has become a necessity in all professional studies. Keeping in par with the same trend we have a well-equipped computer lab. The lab is spacious with an adequate number of computers and is well-furnished. We have spacious, well-equipped, and ventilated classrooms with comfortable seating facility.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-blue-700">
              Program Ability
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-green-700">
              Contact Form
            </button>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="flex-1 md:flex-[0_0_60%] relative">
          <Facilityimage />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
