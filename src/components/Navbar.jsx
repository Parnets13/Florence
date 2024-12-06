import { useState, useEffect } from 'react';
import { FaCaretDown, FaCaretRight, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import logo from './../assets/logonew-removebg-preview.png';
import logo from './../assets/logonew.png';
import 'flowbite'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu state
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For search dialog state
  const [isAcademicMenuOpen, setIsAcademicMenuOpen] = useState(false);
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false);
  const [isAdmissionMenuOpen, setIsAdmissionMenuOpen] = useState(false);
  const [isAboutUsMenuOpen, setAboutUsMenuOpen] = useState(false);
  const [isInfrastructureMenuOpen, setIsInfrastructureMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search dialog
  };

  const toggleMobileAcademicMenu = () => {
    setIsAcademicMenuOpen(!isAcademicMenuOpen);
    if (isCourseMenuOpen) setIsCourseMenuOpen(false); // Close course menu
    if (isAdmissionMenuOpen) setIsAdmissionMenuOpen(false); // Close admission menu
  };

  const toggleMobileCourseMenu = () => {
    setIsCourseMenuOpen(!isCourseMenuOpen);
    if (isAcademicMenuOpen) setIsAcademicMenuOpen(false); // Close academic menu
  };

  const toggleMobileAdmissionMenu = () => {
    setIsAdmissionMenuOpen(!isAdmissionMenuOpen);
    if (isAcademicMenuOpen) setIsAcademicMenuOpen(false); // Close academic menu
  };

  const toggleMobileInfrastructureMenu = () => {
    setIsInfrastructureMenuOpen(!isInfrastructureMenuOpen);
  };

  const toggleMobileAboutUsMenu = () => {
    setAboutUsMenuOpen(!isAboutUsMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu when a link is clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div className={`z-[999999] ${isScrolled ? 'fixed top-0 left-0 w-full shadow-lg' : ''}`}>




    <nav class="bg-[#89216b] sticky w-full top-0 z-10">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
         <Link to='/'> <img src={logo} alt="Logo" className='lg:w-80 lg:h-12 w-64 h-12' /></Link>
        </a>
        <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white">
            <li>
              <a href="/" class="block py-2 px-3 text-white hover:text-[#f8841d]" aria-current="page">Home</a>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-white hover:text-[#f8841d]">About Us <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
              <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/about-overview" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Overview</a>
                  </li>
                  <li>
                    <a href="/about-campus" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Campus</a>
                  </li>
                  <li>
                    <a href="/mission&values" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mission & Values</a>
                  </li>
                  <li>
                    <a href="/principal" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Principal</a>
                  </li>
                  <li>
                    <a href="/message" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Message</a>
                  </li>
                  {/* <li>
                    <a href="/requirements" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Requirements</a>
                  </li> */}
                </ul>
              </div>
            </li>
            <li>
              <button id="dropdownNavbarLink1" data-dropdown-toggle="dropdownNavbar1" class="flex items-center justify-between w-full py-2 px-3 text-white hover:text-[#f8841d]">Acamedics <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
              <div id="dropdownNavbar1" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li aria-labelledby="dropdownNavbarLink1">
                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Courses<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                    <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        <li>
                          <a href="/nursing" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Nursing</a>
                        </li>
                        <li>
                          <a href="/physiotheraphy" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Phsiotheraphy</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/govt-order-details" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Govt Order Details</a>
                  </li>
                  <li>
                    <a href="/calendar" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Calender</a>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li>
              <a href="#" class="block py-2 px-3 text-white hover:text-[#f8841d]">Infrastructure</a>
            </li> */}
            <li>
              <a href="/application" class="block py-2 px-3 text-white hover:text-[#f8841d]">Application</a>
            </li>
            <li>
              <a href="/gallery" class="block py-2 px-3 text-white hover:text-[#f8841d]">Gallery</a>
            </li>
            <li>
              <a href="/contact" class="block py-2 px-3 text-white hover:text-[#f8841d]">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    // </div>
  );
};

export default Navbar