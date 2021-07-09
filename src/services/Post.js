import { useEffect } from "react";
import { getAllComment, getAllPost, getAllUser } from "../api";
import { useAppDispatch } from "../hooks";
import { setAllComment } from "../store/Comment";
import { setAllPost } from "../store/Post";
import { setAllUser } from "../store/User";

export const usePosts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const asyncFunc = async () => {
      const posts = await getAllPost();
      const comments = await getAllComment();
      const users = await getAllUser();
      dispatch(setAllPost(posts));
      dispatch(setAllComment(comments));
      dispatch(setAllUser(users));
    };
    asyncFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
