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
      {albums.length === 0 && (
        <div className="flex justify-center items-center mt-32">
          <SpinnerCircular size="75" color="black" />
        </div>
      )}
      <div className="grid grid-cols-2 gap-8 mt-8 mx-6">
        {albums.map((item: AlbumType, i: number) => (
          <figure
            key={i}
            className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 md:h-40"
          >
            <Gallery idPost={item.id} />
            <div className="pt-6 md:p-6 text-center md:text-left ">
              {/*space-y-4 */}
              <blockquote>
                <p className="font-semibold">{item.title}</p>
              </blockquote>
              <figcaption className="mt-2">
                <div className="text-cyan-600">{UserName(item, users)}</div>
                <div className="text-gray-500">
                  {UserStreet(item, users)}, {UserSuite(item, users)},{" "}
                  {UserCity(item, users)}
                </div>
                <div className="text-cyan-600 mt-2">
                  {/*pt-3*/}
                  {getPhotos(photos, item.id).length} photos
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </>
  );
};

{
  /*<div key={i} className="flex justify-center ">
          <div className="flex flex-col justify-center w-2/3 mt-8 border border-gray-100 bg-gray-100 rounded-lg">
            <div className="mt-4 flex items-center justify-center ml-8 mx-8">
              <p className="text-black">{item.title}</p>
            </div>
            <p className="h-8 flex items-center justify-center ml-8 mx-8">
              {UserName(item, users)}
            </p>
            <p className="h-4 flex items-center justify-center ml-8 text-gray-500 mb-2 mx-8">
              {UserStreet(item, users)}, {UserSuite(item, users)},{" "}
              {UserCity(item, users)}
            </p>
            <div className="grid grid-cols-3 gap-2 my-4">
              {auth.user && <Gallery idPost={item.id} />}
            </div>
          </div>
      </div>*/
}
export default ListAlbum;
