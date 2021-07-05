import { useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";
import { useAppSelector } from "../../hooks";
import { getPhotos } from "../../Utils";

type IGallery = {
  idPost: number;
};

const Gallery: React.FC<IGallery> = ({ idPost }) => {
  const photos = useAppSelector((state) => state.photo.photo);
  const photosItems = getPhotos(photos, idPost);
  const [galleryOpened, setGalleryOpened] = useState(false);
  function toggleGallery() {
    setGalleryOpened(!galleryOpened);
  }

  return (
    <>
      <div className="hover-outer-box " onClick={toggleGallery}>
        <img
          src={photosItems[0]?.photo}
          alt=""
          width="150"
          className="rounded-xl "
        />
        <div className="hover-inner-box ">
          <div className="hover-content">
            <p>ouvrir</p>
          </div>
        </div>
      </div>

      <ReactBnbGallery
        show={galleryOpened}
        photos={photosItems}
        onClose={toggleGallery}
      />
    </>
  );
};

export default Gallery;
