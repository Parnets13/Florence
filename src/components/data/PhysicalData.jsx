import library from './../../assets/LIBRARY.jpg';
import classroom from './../../assets/PHYSIOTHERAPY-CLASSROOM.jpg';
import hostel from './../../assets/HOSTEL-ROOM.jpg';
import mess from './../../assets/IMG_20160606_113512192-1024x768.jpg';
import computer from './../../assets/COMPUTER-LAB.jpg';
import transportation from './../../assets/DSC_6685.jpg';

const physicalData =
{
    title: "Physical",
    description: "Florence institution has established excellent infrastructure. We have good buildings which are situated in an excellent locality of Bangalore and are away from the noisy environment. Each course has a separate block with good facilities for library, laboratories, classrooms and offices. Computer has become a necessity in all professional studies. Keeping in par with the same trend we have a well equipped computer lab. The lab is spacious with adequate number of computers and is well furnished. We have spacious, well equipped and ventilated classrooms with comfortable seating facility. Our students are accommodated and prepared for futuristic global level competency in delivering health care system in community and hospitals.",
    facilities:
    {
        library:
        {
            description: "Our library is well equipped with various professional books, medical and paramedical education journals, periodicals, newspapers, and others. We also have high speed internet connectivity so that students can benefit and update their knowledge about the current discoveries and events happening in their profession. Students are given library cards to borrow and return books; reference books are not permitted outside the library.",
            imageUrl: library
        },
        classrooms:
            { description: "Classrooms have adequate seating arrangement, spacious and well built with good ventilation. All classrooms are equipped with modern furniture and AV aids like OHP, Multimedia Projectors, Computers, Televisions, VCR, CD Players, etc.", imageUrl: classroom }, transportation:
            { description: "The College has its own fleet of buses and trained drivers to transport students and staff to various destinations like hospitals, clinics, community, seminars, workshops, etc. on time.", imageUrl: transportation },
        hostel:
            { description: "We have a multi-storied building with spacious and well ventilated hostel separately for boys and girls. Security personnel work around the clock in the hostel to provide security to all the inmates. Peaceful environment of the hostel encourages learning activities. Rules and regulations of the hostel are strictly followed by the students. Teachers available in the hostel always guide and counsel students as and when necessary.", imageUrl: hostel },
        mess:
            { description: "In order to maintain good physical and mental health, we have a hygienic and well-furnished mess with a hi-tech kitchen and all modern equipment. Also, a well-ventilated and spacious dining hall, where all the students can accommodate at a time. Keeping students' taste in mind, both North Indian & South Indian special dishes are provided in the mess.", imageUrl: mess },
        computerLab:
            { description: "Computer has become a necessity in all professional studies. Keeping in par with the same trend we have a well equipped computer lab. The lab is spacious with adequate number of computers and is well furnished. Our students make use of the lab to update their knowledge under proper supervision. We also have high speed internet connectivity so that students can benefit and update their knowledge about the current discoveries and events happening in their profession.", imageUrl:  computer}
    }
};

export default physicalData;