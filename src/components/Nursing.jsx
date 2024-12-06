
import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Nursingcourses from './data/NursingData.jsx';
import DoubleUnderline from './animata/card/DoubleUnderline.jsx';

const Nursing = () => {
    const [selectedCourse, setSelectedCourse] = useState(Nursingcourses[0]); // Set the initial state to the first course

    return (
        <div className='px-[3vw] '>
            <DoubleUnderline className="my-8"><h1 className='alfa-slab text-3xl text-center my-2 text-[#89216b]'>Nursing Programs at Florence Group of Institution</h1></DoubleUnderline>

            <div className='my-10 flex flex-col lg:flex-row gap-10'>
                {/* <div className='w-[30%] h-[350px] sticky top-[100px] z-0 bg-white'>
                    {Nursingcourses.map((item, index) => (
                        <div key={index}>
                            <h1
                                className={`py-2 border border-[#89216b] cursor-pointer ${selectedCourse === item ? 'bg-[#89216b] text-white' : 'text-black hover:bg-[#89216b] hover:text-white'}`}
                                onClick={() => setSelectedCourse(item)}
                            >
                                <span className='p-4'>{item.name}</span>
                            </h1>
                            <hr />
                        </div>
                    ))}
                </div> */}

                <div className="w-full lg:w-[25%] rounded-md sticky top-[100px] z-0 h-[400px] flex flex-col space-y-3 bg-[#89216b] justify-center items-center"  >
                    {Nursingcourses.map((item, index) => (<div key={index} className="w-3/4 text-center"><h1
                        className={`backdrop-blur-lg bg-white bg-opacity-40 p-3 rounded text-white hover:bg-opacity-20 transition  text-center border border-[#89216b] cursor-pointer ${selectedCourse === item ? 'bg-[#89216b] text-white' : 'bg-white bg-opacity-10 text-black hover:bg-[#89216b] hover:text-white'}`}
                        onClick={() => setSelectedCourse(item)}
                    >
                        <span className="p-4">{item.name}</span>
                    </h1>
                    </div>))}
                </div>
                <div className='lg:w-[70%] w-full'>
                    {selectedCourse ? (
                        <div>
                            <h2>{selectedCourse.name}</h2>
                            <p><strong>Eligibility:</strong> {selectedCourse.eligibility}</p>
                            <p><strong>Description:</strong> {selectedCourse.description}</p>
                            <Table>
                                <TableCaption>Course Details</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Detail</TableHead>
                                        <TableHead>Information</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {selectedCourse.details.map((detail, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{Object.keys(detail)[0]}</TableCell>
                                            <TableCell>{Object.values(detail)[0]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <img src={selectedCourse.image} alt={selectedCourse.name} />
                        </div>
                    ) : (
                        <p>Please select a course to see details</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nursing;
