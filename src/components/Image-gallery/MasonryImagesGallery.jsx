import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "../Image-gallery/galleryImages";
const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 786: 3, 992: 4 }}>
      <Masonry gutter="1rem" >
        {galleryImages.map((item, index) => (
          <img
            src={item}
            key={index}
            alt=""
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
            className="masonry__img"
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
