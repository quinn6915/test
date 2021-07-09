import { useState } from "react";
import { comment } from "../api";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addComment } from "../store/Comment";

export const useComment = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({});

  const handleChange = (event, i) => {
    const { value } = event.target;
    setForm({
      ...form,
      [i]: value,
    });
  };

  const submit = async (event, setLoading, idPost, body) => {
    setLoading(true);
    event.preventDefault();
    const value = {
      postId: idPost,
      name: user?.name,
      email: user?.email,
      body: body,
    };
    let response = await comment(value);
    dispatch(addComment(response));
    setForm({});
    setLoading(false);
  };

  return {
    form,
    handleChange,
    submit,
  };
};
