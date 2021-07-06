import { useAppSelector } from "../../hooks";
import { FC, SyntheticEvent } from "react";
import { useAuth } from "../../context/Auth";
import { authType } from "../../CostumType";
import { SpinnerCircular } from "spinners-react";
import { useTodos } from "../../services/Todo";
import { UserName } from "../../Utils";
import checkmark from "../../assets/check-mark.svg";
import uncheckmark from "../../assets/unchecked.svg";
import { useAddTodo } from "../../services/AddTodo";

const ListTodo: FC = () => {
  useTodos();
  const todos = useAppSelector((state) => state.todo.todos);
  const users = useAppSelector((state) => state.user.users);
  const { form, handleChange, submit, toggleTodo } = useAddTodo();

  let auth = useAuth() as authType;

  return (
    <>
      <div className="flex justify-center">
        <div
          className="h-96 bg-gradient-to-tl from-pink-400  to-purple-600 w-4/5 rounded-xl transform rotate-1 absolute top-1/3 "
          style={{ zIndex: -1, position: "fixed" }}
        ></div>
      </div>
      <div className="flex justify-center">
        <div
          className="h-96 bg-gray-300 w-4/5 rounded-xl transform rotate-2  absolute top-1/3 "
          style={{ zIndex: -2, position: "fixed" }}
        ></div>
      </div>
      <div className="flex justify-center my-4 ">
        <div className="w-1/3 ">
          <div className="flex mt-4 justify-center">
            {auth.user ? (
              <>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Ajouter une nouvelle todo"
                  name="title"
                  onChange={(e) => handleChange(e)}
                  value={form.title}
                />
                <button
                  disabled={form.title === undefined || form.title === ""}
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-indigo-900 hover:bg-teal"
                  onClick={(e: SyntheticEvent) => submit(e)}
                >
                  Ajouter
                </button>
              </>
            ) : (
              <p>Connectez-vous pour ajouter une todo</p>
            )}
          </div>
        </div>
      </div>
      {todos.length === 0 && (
        <div className="flex justify-center items-center mt-32">
          <SpinnerCircular size="75" color="black" />
        </div>
      )}
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-center">
          <div className="bg-white rounded-lg shadow p-6 m-2 w-full lg:w-1/2 bg-gray-100">
            <div className="flex items-center">
              <div className="w-full ">
                <p
                  className={`${
                    todo.completed ? "line-through text-green-600" : ""
                  }`}
                >
                  {todo.title}
                </p>
                <p className="text-gray-500">{UserName(todo, users)}</p>
              </div>
              {todo.completed === false ? (
                <button
                  className="p-2 ml-2"
                  onClick={(e) => toggleTodo(e, todo)}
                >
                  <img className="h-8 w-8" src={uncheckmark} alt="Workflow" />
                </button>
              ) : (
                <button
                  className="p-2 ml-2"
                  onClick={(e) => toggleTodo(e, todo)}
                >
                  <img className="h-8 w-8" src={checkmark} alt="Workflow" />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListTodo;
