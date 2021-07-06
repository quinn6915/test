import { ChangeEvent, SyntheticEvent, useState } from "react";
import { CommentInput } from "../api/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addComment } from "../store/Comment";

export const useComment = () => {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();
  const [form, setForm] = useState<CommentInput>({
    body: "",
  });
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number
  ) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submit = async (
    event: SyntheticEvent,
    setLoading: Function,
    idPost: number
  ) => {
    setLoading(true);
    event.preventDefault();
    const value = {
      postId: idPost,
      id: Math.floor(Math.random() * (500 - 201) + 201),
      name: user?.name,
      email: user?.email,
      body: form.body,
    };

    dispatch(addComment(value));
    setForm({
      body: "",
    });
    setLoading(false);
  };

  return {
    form,
    handleChange,
    submit,
  };
};
