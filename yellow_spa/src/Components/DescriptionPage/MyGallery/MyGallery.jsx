import ImageGallery from "react-image-gallery";
import React, { useState } from "react";
import {
  LoaderContainerStyled,
  LoaderStyled,
} from "../../Helpers/LoaderStyled";


function MyGallery({ screenshots, isDesktop, isMobile }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const onImageLoadHandler = () => {
    console.log("GALLERY IMAGE LOADED");
    setIsLoaded(() => true);
  };

  return (
    <>
      <div style={isLoaded ? { display: "block" } : { display: "none" }}>
        <ImageGallery
          items={screenshots}
          showBullets={true}
          showIndex={false}
          showThumbnails={!isMobile}
          lazyLoad={true}
          thumbnailPosition={isDesktop ? "right" : "bottom"}
          showPlayButton={false}
          onImageLoad={onImageLoadHandler}
          useBrowserFullscreen={false}
          disableThumbnailScroll
        />
      </div>
      {!isLoaded && (
        <LoaderContainerStyled>
          <LoaderStyled isDescription />
        </LoaderContainerStyled>
      )}
    </>
  );
}

export default MyGallery;
