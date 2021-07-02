import { AlbumType } from "../../api/types";
import { useAppSelector } from "../../hooks";
import { FC } from "react";
import { useAuth } from "../../context/Auth";
import { authType } from "../../CostumType";
import { SpinnerCircular } from "spinners-react";
import { UserCity, UserName, UserStreet, UserSuite } from "../../Utils";
import { useAlbums } from "../../services/Album";
import "../../css/style.css";

const ListAlbum: FC = () => {
  useAlbums();
  const users = useAppSelector((state) => state.user.users);
  const albums = useAppSelector((state) => state.album.album);
  const photos = useAppSelector((state) => state.photo.photo);
  //const { form, handleChange, submit } = useComment();
  let auth = useAuth() as authType;
  //const [loading, setLoading] = useState<Boolean>(false);

  return (
    <>
      {albums.length === 0 && (
        <div className="flex justify-center items-center mt-32">
          <SpinnerCircular size="75" color="black" />
        </div>
      )}
      {albums.map((item: AlbumType, i: number) => (
        <div key={i} className="flex justify-center ">
          <div className="flex flex-col justify-center w-2/3 mt-8 border border-gray-100 bg-gray-100 rounded-lg">
            <div className="mt-4 flex items-center justify-center ml-8 mx-8">
              <p className="text-black">{item.title}</p>
            </div>
            {/* <div className="mt-2 mb-1 flex items-center justify-start mx-8">
              <p className="text-black font-semibold">{item.user.name}</p>{" "}
              <p className="">{item.body}</p>
            </div>*/}
            <p className="h-8 flex items-center justify-center ml-8 mx-8">
              {UserName(item, users)}
            </p>
            <p className="h-4 flex items-center justify-center ml-8 text-gray-500 mb-2 mx-8">
              {UserStreet(item, users)}, {UserSuite(item, users)},{" "}
              {UserCity(item, users)}
            </p>
            <div className="grid grid-cols-3 gap-2 my-4">
              {auth.user &&
                photos.map(
                  (photo) =>
                    photo.albumId === item.id && (
                      <div className="hover-outer-box">
                        <img src={photo.url} alt="" className="full-img" />
                        <div className="hover-inner-box">
                          <div className="hover-content">
                            <p>{photo.title}</p>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListAlbum;
