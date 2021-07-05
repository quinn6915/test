import { useAppSelector } from "../../hooks";
import { FC, useState } from "react";
import { useAuth } from "../../context/Auth";
import { authType } from "../../CostumType";
import { SpinnerCircular } from "spinners-react";
import { useTodos } from "../../services/Todo";

const ListTodo: FC = () => {
  useTodos();
  const todos = useAppSelector((state) => state.todo.todos);
  const users = useAppSelector((state) => state.user.users);
  const [loading, setLoading] = useState<Boolean>(false);

  let auth = useAuth() as authType;

  return (
    <>
      {todos.length === 0 && (
        <div className="flex justify-center items-center mt-32">
          <SpinnerCircular size="75" color="black" />
        </div>
      )}
    </>
  );
};

export default ListTodo;
