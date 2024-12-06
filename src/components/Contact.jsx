// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { CircleAlert, Send } from 'lucide-react'
// import { AnimatePresence, motion } from 'framer-motion';
// import Modal from './animata/Modal';
// import { cn } from "@/lib/utils";



// const Contact = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className='px-[3vw] flex gap-10 flex-col lg:flex-row'>
//             <div className='w-[25%] bg-[#89216b] h-[600px] my-10 rounded-md p-3 space-y-3 sticky top-[200px] text-white'>
//                 <h3 className='open-sans text-lg my-4  font-bold'>Contact Information</h3>
//                 <div className='flex flex-col gap-1'>
//                     <h4 className='font-bold'>Phone No:</h4>
//                     <p className='text-sm text-gray-50'> 9731254588</p>
//                 </div>
//                 <div className='flex flex-col gap-1'>
//                     <h4 className='font-bold'>Tel:</h4>
//                     <p className='text-sm text-gray-50'> 080 – 2544 8311, 4120 9299</p>
//                 </div>
//                 <div className='flex flex-col gap-1'>
//                     <h4 className='font-bold'>Fax:</h4>
//                     <p className='text-sm text-gray-50'> 080 – 2544 6379</p>
//                 </div>
//                 <div className='flex flex-col gap-1'>
//                     <h4 className='font-bold'>Address</h4>
//                     <p className='text-sm text-gray-50'># 507 & 509, 1 ‘D’ Main, 3rd Block,
//                         Kalyannagar, HRBR Layout,
//                         Bangalore – 560 043</p>
//                 </div>
//                 <div className='flex flex-col gap-1'>
//                     <h4 className='font-bold'>Location</h4>
//                     <p className='text-sm text-gray-50'>Near Hennur Depot No. 10
//                         (Behind State Bank of Mysore)</p>
//                 </div>
//                 <div className='flex flex-col gap-1'>
//                     <h4 className='font-bold'>Admission Office In Nepal</h4>
//                     <p className='text-sm text-gray-50'>ABSCICCA INTERNATIONAL EDUCATION
//                         KATHMANDU, NEPAL
//                         PH NO: +977-9851161567 & +977-9841252169</p>
//                 </div>
//             </div>

//             <form className='w-[70%] my-10 rounded-md p-3 space-y-3'>
//                 <h1 className='text-2xl alfa-slab'>Keep In Touch, We Want To Hear From You - Send Us Message</h1>
//                 <div className='space-y-5 pt-4'>
//                     <div className='flex gap-5'>
//                         <div className='w-full lg:w-[50%] gap-2 flex flex-col'>
//                             <label htmlFor="firstname" className='w-24'>First Name<span> *</span></label>
//                             <input type="text" className='py-2 rounded-md ' required placeholder='Enter your First Name' />
//                         </div>
//                         <div className='w-full lg:w-[50%] gap-2 flex  flex-col'>
//                             <label htmlFor="lastname" className='w-24'>Last Name<span> *</span></label>
//                             <input type="text" className='py-2 rounded-md ' required placeholder='Enter your First Name' />
//                         </div>
//                     </div>
//                     <div className='flex gap-5'>
//                         <div className='w-full lg:w-[50%] gap-2 flex  flex-col'>
//                             <label htmlFor="email" className='w-24'>Email<span> *</span></label>
//                             <input type="email" className='py-2 rounded-md ' required placeholder='Enter your Email' />
//                         </div>
//                         <div className='w-full lg:w-[50%] gap-2 flex  flex-col'>
//                             <label htmlFor="mobile" className='w-24'>Phone No<span> *</span></label>
//                             <input type="number" className='py-2 rounded-md ' required placeholder='Enter your Phone Number' />
//                         </div>
//                     </div>
//                     <div className='w-full  gap-2 flex  flex-col'>
//                         <label htmlFor="message" className='w-24'>Message</label>
//                         <textarea name="" id="" placeholder='Write your Message here' rows={5} cols={10} className='rounded-md'></textarea>
//                     </div>
//                     <span className='flex gap-3 items-center text-gray-500' required >
//                         <input type="checkbox" name="" id="" /> By submitting this form, you agree to the Falar University privacy notice
//                     </span>
//                     <Button className='flex gap-3 bg-[#f8841d] hover:bg-[#ff9b44]' type="submit" onClick={() => setIsOpen(true)}>Send Message <Send /></Button>

//                     <AnimatePresence>
//                         {isOpen && (
//                             <div
//                                 onClick={() => setIsOpen(false)}
//                                 className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
//                             >
//                                 <motion.div
//                                     initial={{ scale: 0, rotate: "180deg" }}
//                                     animate={{
//                                         scale: 1,
//                                         rotate: "0deg",
//                                         transition: {
//                                             type: "spring",
//                                             bounce: 0.25,
//                                         },
//                                     }}
//                                     exit={{ scale: 0, rotate: "180deg" }}
//                                     onClick={(e) => e.stopPropagation()}
//                                     className={cn(
//                                         "relative w-full max-w-lg cursor-default overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-6 text-white shadow-2xl",
//                                         {
//                                             "max-w-sm": modalSize === "sm",
//                                         }
//                                     )}
//                                 >
//                                     <div className="flex flex-col gap-3">
//                                         <CircleAlert className="mx-auto text-white" size={48} />
//                                         <h3
//                                             className={cn("text-center text-3xl font-bold", {
//                                                 "text-2xl": modalSize === "sm",
//                                             })}
//                                         >
//                                             Welcome to the modal!
//                                         </h3>
//                                         <p className="mb-1 text-center">
//                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                                             incididunt ut labore et dolore magna.
//                                         </p>
//                                         <div className="flex gap-2">
//                                             <button
//                                                 onClick={() => setIsOpen(false)}
//                                                 className="w-full rounded bg-transparent py-2 font-semibold text-white transition-colors hover:bg-white/30"
//                                             >
//                                                 Close!
//                                             </button>
//                                             <button
//                                                 onClick={() => setIsOpen(false)}
//                                                 className="w-full rounded bg-white py-2 font-semibold text-indigo-600 transition-opacity hover:opacity-80"
//                                             >
//                                                 Understood!
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             </div>
//                         )}
//                     </AnimatePresence>


//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Contact














import React, { useState } from 'react';
import { Button } from './ui/button';
import { CircleAlert, CircleCheck, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import DoubleUnderline from './animata/card/DoubleUnderline';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='px-[3vw] flex gap-10 flex-col lg:flex-row'>
            <div className='w-[25%] bg-[#89216b] h-[500px] my-10 rounded-md p-3 space-y-3 sticky top-[200px] text-white'>
                <h3 className='open-sans text-lg my-4  font-bold'>Contact Information</h3>
                <div className='flex flex-col gap-1'>
                    <h4 className='font-bold'>Phone No:</h4>
                    <p className='text-sm text-gray-50'> 9731254588</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h4 className='font-bold'>Tel:</h4>
                    <p className='text-sm text-gray-50'> 080 – 2544 8311, 4120 9299</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h4 className='font-bold'>Address:</h4>
                    <p className='text-sm text-gray-50'># 507 & 509, 1 ‘D’ Main, 3rd Block,
                        Kalyannagar, HRBR Layout,
                        Bangalore – 560 043</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h4 className='font-bold'>Location:</h4>
                    <p className='text-sm text-gray-50'>Near Hennur Depot No. 10
                        (Behind State Bank of Mysore)</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h4 className='font-bold'>Admission Office In Nepal:</h4>
                    <p className='text-sm text-gray-50'>ABSCICCA INTERNATIONAL EDUCATION
                        KATHMANDU, NEPAL
                        PH NO: +977-9851161567 & +977-9841252169</p>
                </div>
            </div>

            <form className='w-[70%] my-10 rounded-md p-3 space-y-3'>
                <DoubleUnderline><h1 className='text-3xl alfa-slab text-[#89216b] text-center my-2'>Keep In Touch, We Want To Hear From You - Send Us Message</h1></DoubleUnderline>
                <div className='space-y-5 pt-4'>
                    <div className='flex gap-5'>
                        <div className='w-full lg:w-[50%] gap-2 flex flex-col'>
                            <label htmlFor="firstname" className='w-24'>First Name<span> *</span></label>
                            <input type="text" className='py-2 rounded-md ' required placeholder='Enter your First Name' />
                        </div>
                        <div className='w-full lg:w-[50%] gap-2 flex  flex-col'>
                            <label htmlFor="lastname" className='w-24'>Last Name<span> *</span></label>
                            <input type="text" className='py-2 rounded-md ' required placeholder='Enter your Last Name' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-full lg:w-[50%] gap-2 flex  flex-col'>
                            <label htmlFor="email" className='w-24'>Email<span> *</span></label>
                            <input type="email" className='py-2 rounded-md ' required placeholder='Enter your Email' />
                        </div>
                        <div className='w-full lg:w-[50%] gap-2 flex  flex-col'>
                            <label htmlFor="mobile" className='w-24'>Phone No<span> *</span></label>
                            <input type="number" className='py-2 rounded-md ' required placeholder='Enter your Phone Number' />
                        </div>
                    </div>
                    <div className='w-full  gap-2 flex  flex-col'>
                        <label htmlFor="message" className='w-24'>Message</label>
                        <textarea name="" id="" placeholder='Write your Message here' rows={5} cols={10} className='rounded-md'></textarea>
                    </div>
                    <span className='flex gap-3 items-center text-gray-500' required >
                        <input type="checkbox" name="" id="" /> By submitting this form, you agree to the Falar University privacy notice
                    </span>
                    <Button className='flex gap-3 bg-[#f8841d] hover:bg-[#ff9b44]' type="submit" onClick={(e) => { e.preventDefault(); setIsOpen(true); }}>
                        Send Message <Send />
                    </Button>

                    {/* <AnimatePresence>
                        {isOpen && (
                            <div
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
                            >
                                <motion.div
                                    initial={{ scale: 0, rotate: "180deg" }}
                                    animate={{
                                        scale: 1,
                                        rotate: "0deg",
                                        transition: {
                                            type: "spring",
                                            bounce: 0.25,
                                        },
                                    }}
                                    exit={{ scale: 0, rotate: "180deg" }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="relative w-full max-w-lg cursor-default overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-6 text-white shadow-2xl"
                                >
                                    <div className="flex flex-col gap-3">
                                        <CircleCheck className="mx-auto text-white" size={48} />
                                        <h3 className="text-center text-3xl font-bold">Thank you for contacting us!</h3>
                                        <p className="mb-1 text-center">
                                            We appreciate you reaching out to us. Our team will review your message and get back to you as soon as possible. If you have any urgent inquiries, feel free to call us directly. Thank you for your patience
                                        </p>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setIsOpen(false)}
                                                className="w-full rounded bg-white py-2 font-semibold text-indigo-600 transition-opacity hover:opacity-80"
                                            >
                                                Close!
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence> */}

                    <AnimatePresence>
                        {isOpen && (
                            <div
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
                            >
                                <motion.div
                                    initial={{ scale: 0, rotate: "180deg" }}
                                    animate={{
                                        scale: 1,
                                        rotate: "0deg",
                                        transition: {
                                            type: "spring",
                                            bounce: 0.25,
                                        },
                                    }}
                                    exit={{ scale: 0, rotate: "180deg" }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="relative w-full max-w-lg cursor-default overflow-hidden rounded-xl bg-gradient-to-r from-[#89216b] via-[#89216b] to-[#89216b] p-6 text-white shadow-2xl"
                                >
                                    <div className="flex flex-col gap-3">
                                        <CircleCheck className="mx-auto text-white" size={48} />
                                        <h3 className="text-center text-3xl font-bold">Thank you for contacting us!</h3>
                                        <p className="mb-1 text-center">
                                            We appreciate you reaching out to us. Our team will review your message and get back to you as soon as possible. If you have any urgent inquiries, feel free to call us directly. Thank you for your patience.
                                        </p>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setIsOpen(false)}
                                                className="w-full rounded bg-white py-2 font-semibold text-indigo-600 transition-opacity hover:opacity-80"
                                            >
                                                Close!
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>

                </div>
            </form>
        </div>
    );
};

export default Contact;
