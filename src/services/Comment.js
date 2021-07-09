import {  useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addComment } from "../store/Comment";

export const useComment = () => {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();
  const [form, setForm] = useState({});
  const handleChange = (
    event,
    i
  ) => {
    const { value } = event.target;
    setForm({
      ...form,
      [i]: value,
    });
  };

  const submit = async (
    event,
    setLoading,
    idPost,
    comment
  ) => {
    setLoading(true);
    event.preventDefault();
    const value = {
      postId: idPost,
      id: Math.floor(Math.random() * (500 - 201) + 201),
      name: user?.name,
      email: user?.email,
      body: comment,
    };

    dispatch(addComment(value));
    setForm({});
    setLoading(false);
  };

  return {
    form,
    handleChange,
    submit,
  };
};
