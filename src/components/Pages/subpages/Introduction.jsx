import logo from "../subpages/Galleryspeak/s1.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";
import OurProgress from '../../Pages/subpages/OurProgress'
import college from './../../../assets/DSC_6664.jpg';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"





const Introduction = () => {
  const members = [{ id: 1, name: 'Mrs. Kalpana', designation: 'Educationist', responsibility: 'Chairperson' }, { id: 2, name: 'Mr. C. Mallikarjuna', designation: 'Educationist', responsibility: 'Member' }, { id: 3, name: 'Mr. M. Chandan', designation: 'Educationist', responsibility: 'Member' }, { id: 4, name: 'Dr. Bhagavan', designation: 'Ex. Syndicate Member, RGUHS, Bangalore', responsibility: 'Member' }, { id: 5, name: 'Dr. C. Chikkanna', designation: 'Physician', responsibility: 'Member' }, { id: 6, name: 'Mr. Jahangir Shariff', designation: 'Advocate', responsibility: 'Member' }, { id: 7, name: 'Dr. Manjunath', designation: 'Physician', responsibility: 'Member' }, { id: 8, name: 'Mrs. Girijamma', designation: 'Social Worker', responsibility: 'Member' }, { id: 9, name: 'Mr. Thammanna', designation: 'Agriculturalist', responsibility: 'Member' }, { id: 10, name: 'Mr. Thomas', designation: 'Social Worker', responsibility: 'Member' }, { id: 11, name: 'Mr. Lakshmi Narayan', designation: 'Ex–President, TMC Devanahalli and Ex-Senate Member, Bangalore University', responsibility: 'Member' }, { id: 12, name: 'Prof. Amudha K', designation: 'Principal, Florence College of Nursing, Kalyannagar, Bangalore', responsibility: 'Member, Secretary' },];
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8">Introduction</h1>

      <div className="flex flex-col lg:flex-row gap-8 mb-12 lg:justify-center lg:items-center">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={college}
            alt="Institute"
            className="rounded-lg w-full h-auto shadow-lg transform transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <p className="mb-4 text-lg leading-relaxed">
            Florence Group of Institutions is run by Devanahalli Rural Education
            Trust (Regd.), which was established in the year 1984. The theme of
            the Trust is good education with strict discipline. Positive work
            culture is a must to maintain standard & reputation of an
            institution. Our institution has maintained a good track record for
            the past several years.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Our institution prepares students to become ‘A grade’ professionals.
            We are proud to say that most of our former students are
            successfully placed in various parts of the world. Founder Mr. C.
            Mallikarjuna is the force behind Devanahalli Rural Education Trust.
            He is highly qualified and experienced person with the intention of
            developing quality institutions to provide excellent coaching to the
            students.
          </p>
        </div>
      </div>

      <div className="w-3/4">
        <Table> <TableHeader> <TableRow className='bg-blue-500 hover:bg-blue-500 '><TableHead className="w-[100px] text-white">Sl No.</TableHead> <TableHead className='text-white'>Name</TableHead> <TableHead className='text-white'>Designation</TableHead> <TableHead className="text-right text-white">Responsibility</TableHead> </TableRow> </TableHeader> <TableBody> {members.map(member => (<TableRow key={member.id}> <TableCell className="font-medium">{member.id}</TableCell> <TableCell>{member.name}</TableCell> <TableCell>{member.designation}</TableCell> <TableCell className="text-right">{member.responsibility}</TableCell> </TableRow>))} </TableBody> </Table>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[60%] mx-auto bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-4 text-left">Visiting At Faral</h1>
          <p className="text-lg mb-4 text-left">
            Here you'll find all the information about the reasons why the
            University of Luva is a unique institution. Get to know why over 200
            thousand people a year visit us.
          </p>
          <p className="text-lg mb-8 text-left">
            Welcome to Faral, where knowledge meets innovation and where every
            student's journey to success begins.
          </p>

          <div className="flex flex-col items-start mb-8">
            {/* Call Button and Phone Number */}
            <div className="flex items-center mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-6 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:shadow-outline">
                <BiSolidPhoneCall />
              </button>
              {/* Phone Number */}
              <p className="text-lg ml-8">Call +32112345678</p>
            </div>

            {/* Admission Enquiry Text */}
            <p className="text-lg text-left ml-[50px]">
              For any kind of admission enquiry
            </p>
          </div>

          {/* Book A Visit Button */}
          <div className="flex justify-start">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[400px] h-[50px]">
              Book A Visit Today →
            </button>
          </div>
        </div>

        {/* Image Stack with Fixed Layout */}
        <div className="flex w-full md:w-[40%] h-[500px] p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-700 hover:scale-105">
          <div className="gap-2 h-[600px]">
            <div className="flex flex-col gap-2">
              <img
                src={logo}
                alt="Image 1"
                className="w-[300px] h-[196px] ml-30 z-10 transform transition-transform duration-500 hover:scale-105"
              />
              <img
                src={logo}
                alt="Image 2"
                className="w-[300px] h-[196px] transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div>
            <img
              src={logo}
              alt="Image 3"
              className="w-[400px] h-[400px] transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>

      <div>
        <OurProgress />
      </div>

    </div>
  );
};

export default Introduction;
