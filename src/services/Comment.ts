import { ChangeEvent, SyntheticEvent, useState } from "react";
import { comment } from "../api";
import { CommentInput } from "../api/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addComment } from "../store/Comment";
//import { commentCar } from "../store/Car";

export const useComment = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<CommentInput>({
    name: user,
    body: "",
    user: "",
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

  const submit = async (event: SyntheticEvent, setLoading: Function) => {
    setLoading(true);
    event.preventDefault();
    const value = await comment(form);
    dispatch(addComment(value));
    setForm({
      name: user,
      body: "",
      user: "",
    });
    setLoading(false);
  };

  return {
    form,
    handleChange,
    submit,
  };
};
