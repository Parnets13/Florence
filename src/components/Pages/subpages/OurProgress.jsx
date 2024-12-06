import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { RiGraduationCapLine } from "react-icons/ri";
import medel from '../../../assets/medel.svg';
import Sgraduate from '../../../assets/Sgraduate.svg';
import college from '../../../assets/college.svg';

const OurProgress = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="py-12 bg-gray-100 shadow-lg">
      {/* Container with shadow effect */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold">OUR PROGRESS</h3>
          <p className="text-lg text-gray-600">Inside took wow less pounded massive melodiously the.</p>
        </div>

        {/* Flex layout to stack counters vertically */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Stat */}
          <div className="text-center">
            <img src={Sgraduate} alt="Student" className="mx-auto w-20 h-20 mb-4" />
            <h3 className="text-xl">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span className="font-bold text-blue-600 text-3xl">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={33874}
                      duration={3}
                      delay={0}
                    />
                  )}
                  <sup>
                    <span className="font-bold">+</span>
                  </sup>
                </span>
              </ScrollTrigger>
            </h3>
            <p className="uppercase text-sm font-bold text-gray-600 mt-2">
              RECENT GRADUATES STARTED NEW JOB
            </p>
          </div>

          {/* Second Stat */}
          <div className="text-center">
            <RiGraduationCapLine className="mx-auto w-20 h-20 text-green-700 mb-4" />
            <h3 className="text-xl">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span className="font-bold text-blue-600 text-3xl">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={1055000}
                      duration={3}
                      delay={0}
                    />
                  )}
                  <sup>
                    <span className="font-bold">+</span>
                  </sup>
                </span>
              </ScrollTrigger>
            </h3>
            <p className="uppercase text-sm font-bold text-gray-600 mt-2">
              PROGRAMS AVAILABLE FOR THE STUDENTS
            </p>
          </div>

          {/* Third Stat */}
          <div className="text-center">
            <img src={medel} alt="Medal" className="mx-auto w-20 h-20 mb-4" />
            <h3 className="text-xl">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span className="font-bold text-blue-600 text-3xl">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={23457}
                      duration={3}
                      delay={0}
                    />
                  )}
                  <sup>
                    <span className="font-bold">+</span>
                  </sup>
                </span>
              </ScrollTrigger>
            </h3>
            <p className="uppercase text-sm font-bold text-gray-600 mt-2">
              YEARS OF GLORIOUS HISTORY
            </p>
          </div>

          {/* Fourth Stat */}
          <div className="text-center">
            <img src={college} alt="College" className="mx-auto w-20 h-20 mb-4" />
            <h3 className="text-xl">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span className="font-bold text-blue-600 text-3xl">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={4}
                      duration={5}
                      delay={0}
                    />
                  )}
                  <sup>
                    <span className="font-bold">+</span>
                  </sup>
                </span>
              </ScrollTrigger>
            </h3>
            <p className="uppercase text-sm font-bold text-gray-600 mt-2">
              CAMPUS ALL OVER THE WORLD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProgress;
