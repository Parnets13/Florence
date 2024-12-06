import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import styled from "styled-components";
import s1 from "./Galleryspeak/s1.jpg";
import s2 from "./Galleryspeak/s2.jpg";
import s3 from "./Galleryspeak/s3.jpg";
import s4 from "./Galleryspeak/s4.jpg";
import s5 from "./Galleryspeak/s5.jpg";
import s6 from "./Galleryspeak/s6.jpg";
import s7 from "./Galleryspeak/s7.jpg";
import s8 from "./Galleryspeak/s8.jpg";
import s9 from "./Galleryspeak/s9.jpg";

export default function StandardImageList() {
  return (
    <StyledWrapper>
      <ImageList className="image-list" cols={3} rowHeight="auto">
        {itemData.map((item, index) => (
          <ImageListItem key={index} className="image-list-item">
            <img
              srcSet={`${item.img}?w=500&h=500&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=500&h=500&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              className="image"
            />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevent scrollbars */

  .image-list {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 0; /* Remove extra margin to avoid overflow */
  }

  .image-list-item {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  .image-list-item:hover .image {
    transform: scale(1.1); /* Scale image */
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    transition: opacity 0.3s ease-in-out; /* Smooth fade-in */
  }

  .image-list-item:hover .overlay {
    opacity: 0.9; /* Show overlay on hover */
  }

  @media (max-width: 768px) {
    .image-list {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;

const itemData = [
  { img: s1, },
  { img: s2, },
  { img: s3, },
  { img: s4, },
  { img: s5, },
  { img: s6, },
  { img: s7, },
  { img: s8, },
  { img: s9, },
];
