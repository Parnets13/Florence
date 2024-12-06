
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import f1 from './Galleryspeak/s1.jpg';
import f2 from './Galleryspeak/s2.jpg';
import f3 from './Galleryspeak/s3.jpg';
import f4 from './Galleryspeak/s4.jpg';
import f5 from './Galleryspeak/s5.jpg';
import f6 from './Galleryspeak/s6.jpg';
import './Facility.css'; // Import the CSS file for animations

export default function StandardImageList() {
  return (
    <div className="w-full h-auto p-4">
      
      <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} rowHeight="auto">
        {itemData.map((item) => (
          <ImageListItem key={item.img} className="animated-item group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="animated-image w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
            />
            {/* Overlay for animation */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-semibold transition duration-300">
              {item.title}
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: f1,
 
  },
  {
    img: f2,
 
  },
  {
    img: f3,
 
  },
  {
    img: f4,
  
  },
  {
    img: f5,

  },
  {
    img: f6,
  
  },
];
