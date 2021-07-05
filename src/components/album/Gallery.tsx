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
      <button onClick={toggleGallery}>Open photo gallery</button>
      <img src={photosItems[0].photo} alt="" />
      <span>{photosItems.length}</span>
      <ReactBnbGallery
        show={galleryOpened}
        photos={photosItems}
        onClose={toggleGallery}
      />
    </>
  );
};

export default Gallery;
