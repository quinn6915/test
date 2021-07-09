import { useEffect } from "react";
import { getAllAlbum, getAllPhoto, getAllUser } from "../api";
import { useAppDispatch } from "../hooks";
import { setAllalbum } from "../store/Album";
import { setAllphoto } from "../store/Photo";
import { setAllUser } from "../store/User";

export const useAlbums = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const asyncFunc = async () => {
      const albums = await getAllAlbum();
      const photos = await getAllPhoto();
      const users = await getAllUser();
      dispatch(setAllalbum(albums));
      dispatch(setAllphoto(photos));
      dispatch(setAllUser(users));
    };
    asyncFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
