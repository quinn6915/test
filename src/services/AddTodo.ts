import { ChangeEvent, SyntheticEvent, useState } from "react";
import { TodoInput, TodosType } from "../api/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addTodo } from "../store/Todos";
import { toggleTodoStore } from "../store/Todos";

export const useAddTodo = () => {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();
  const [form, setForm] = useState<TodoInput>({
    title: "",
  });
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submit = async (event: SyntheticEvent) => {
    event.preventDefault();
    //const value = await comment(form, idPost);
    const value = {
      userId: user?.id,
      id: Math.floor(Math.random() * (1000 - 501) + 501),
      title: form.title,
      completed: false,
    };

    dispatch(addTodo(value));
    setForm({
      title: "",
    });
  };

  const toggleTodo = (e: SyntheticEvent, todo: TodosType) => {
    e.preventDefault();
    const value = { ...todo, completed: !todo.completed };
    dispatch(toggleTodoStore(value));
  };

  return {
    form,
    handleChange,
    submit,
    toggleTodo,
  };
};
