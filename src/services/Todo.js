import { useEffect } from "react";
import { getAllTodo, getAllUser } from "../api";
import { useAppDispatch } from "../hooks";
import { setAllTodo } from "../store/Todos";
import { setAllUser } from "../store/User";

export const useTodos = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const asyncFunc = async () => {
      const todos = await getAllTodo();
      const users = await getAllUser();
      dispatch(setAllTodo(todos));
      dispatch(setAllUser(users));
    };
    asyncFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
