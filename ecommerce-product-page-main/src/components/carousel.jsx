import img1 from "../assets/image-product-1.jpg";
import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";

import img1_thumbnail from "../assets/image-product-1-thumbnail.jpg";
import img2_thumbnail from "../assets/image-product-2-thumbnail.jpg";
import img3_thumbnail from "../assets/image-product-3-thumbnail.jpg";
import img4_thumbnail from "../assets/image-product-4-thumbnail.jpg";

import "../css/carousel.css";
import { useState } from "react";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3, img4];

  const handleThumbnailClick = (e) => {
    console.log(e.target);
    setCurrentImage(+e.target.dataset.index);
  };

  return (
    <div>
      <div className="carousel">
        <img
          className="carousel-spotlight"
          src={images[currentImage]}
          alt="product"
        />
        <div className="carousel-items">
          <img
            data-index={0}
            src={img1_thumbnail}
            alt="product"
            onClick={handleThumbnailClick}
            className={currentImage === 0 ? "selected" : ""}
          />
          <img
            data-index={1}
            src={img2_thumbnail}
            alt="product"
            onClick={handleThumbnailClick}
            className={currentImage === 1 ? "selected" : ""}
          />
          <img
            data-index={2}
            src={img3_thumbnail}
            alt="product"
            onClick={handleThumbnailClick}
            className={currentImage === 2 ? "selected" : ""}
          />
          <img
            data-index={3}
            src={img4_thumbnail}
            alt="product"
            onClick={handleThumbnailClick}
            className={currentImage === 3 ? "selected" : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
