import { AlbumType } from "../../api/types";
import { useAppSelector } from "../../hooks";
import { FC } from "react";
import { SpinnerCircular } from "spinners-react";
import {
  getPhotos,
  UserCity,
  UserName,
  UserStreet,
  UserSuite,
} from "../../Utils";
import { useAlbums } from "../../services/Album";
import "../../css/style.css";
import Gallery from "./Gallery";

const ListAlbum: FC = () => {
  useAlbums();
  const users = useAppSelector((state) => state.user.users);
  const albums = useAppSelector((state) => state.album.album);
  const photos = useAppSelector((state) => state.photo.photo);

  return (
    <>
      <div className="flex justify-center">
        <div
          className="h-96 bg-gradient-to-br from-gray-900  to-black-800 w-4/5 rounded-xl transform -rotate-2 absolute top-1/3 "
          style={{ zIndex: -1, position: "fixed" }}
        ></div>
      </div>
      <div className="flex justify-center">
        <div
          className="h-96 bg-gray-300 w-4/5 rounded-xl transform -rotate-0  absolute top-1/3 "
          style={{ zIndex: -2, position: "fixed" }}
        ></div>
      </div>
      {albums.length === 0 && (
        <div className="flex justify-center items-center mt-32">
          <SpinnerCircular size="75" color="black" />
        </div>
      )}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-8 mt-8 mx-6 w-3/4 ">
          {albums.map((item: AlbumType, i: number) => (
            <figure
              key={i}
              className="md:flex bg-gray-100 rounded-lg p-8 md:p-0 md:h-40 shadow"
            >
              <Gallery idPost={item.id} />
              <div className="pt-6 md:p-6 text-center md:text-left ">
                {/*space-y-4 */}
                <blockquote>
                  <p className="font-semibold">{item.title}</p>
                </blockquote>
                <div className="text-cyan-600 pt-2">
                  {/*pt-3*/}
                  {getPhotos(photos, item.id).length} photos
                </div>
                <figcaption className="pt-4">
                  <div className="">{UserName(item, users)}</div>
                  <div className="text-gray-500">
                    {UserStreet(item, users)}, {UserSuite(item, users)},{" "}
                    {UserCity(item, users)}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListAlbum;
