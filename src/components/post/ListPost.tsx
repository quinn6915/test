import { PostType } from "../../api/types";
import { useAppSelector } from "../../hooks";
import { usePosts } from "../../services/Post";
import { FC, SyntheticEvent, useState } from "react";
import { useAuth } from "../../context/Auth";
import { authType } from "../../CostumType";
import { SpinnerCircular } from "spinners-react";
import { UserCity, UserName, UserStreet, UserSuite } from "../../Utils";
import { useComment } from "../../services/Comment";

const ListPost: FC = () => {
  usePosts();
  const users = useAppSelector((state) => state.user.users);
  const posts = useAppSelector((state) => state.post.posts);
  const comments = useAppSelector((state) => state.comment.comments);
  const [loading, setLoading] = useState<Boolean>(false);

  const { form, handleChange, submit } = useComment();

  let auth = useAuth() as authType;

  return (
    <>
      {posts.length === 0 && (
        <div className="flex justify-center items-center mt-32">
          <SpinnerCircular size="75" color="black" />
        </div>
      )}
      {posts.map((item: PostType, i: number) => (
        <div key={i} className="flex justify-center">
          <div className="flex flex-col justify-center w-2/3 mt-8 border border-gray-100 bg-gray-100 rounded-lg">
            <div className="mt-4 flex items-center justify-center ml-8 mx-8">
              <p className="text-black font-semibold">{item.title}</p>
            </div>
            <div className="mt-2 mb-1 flex items-center justify-start mx-8">
              <p className="">{item.body}</p>
            </div>
            <p className="h-8 flex items-center justify-end ml-8 mx-8 font-semibold text-indigo-500">
              {UserName(item, users)}
            </p>
            <p className="h-4 flex items-center justify-end ml-8 text-gray-500 mb-2 mx-8">
              {UserStreet(item, users)}, {UserSuite(item, users)},{" "}
              {UserCity(item, users)}
            </p>
            <div className="my-2 flex flex-col mx-8 text-sm text-gray-500">
              {auth.user &&
                comments.map(
                  (com) =>
                    com.postId === item.id && (
                      <span
                        key={com.id}
                        className=" my-1 border rounded-lg bg-gray-200 p-2 px-4"
                      >
                        <p className="text-black font-semibold">{com.email}</p>
                        <span className="flex flex-col">
                          <p className="text-gray-500 ml-2 my-1">{com.body}</p>
                        </span>
                      </span>
                    )
                )}
            </div>
            {auth.user && (
              <div className="my-2 mb-4 flex items-center justify-start mx-8">
                <input
                  required
                  type="text"
                  className="focus:outline-none bg-gray-100 w-full"
                  placeholder="Votre commentaire"
                  name="body"
                  onChange={(e) => handleChange(e, i)}
                  value={form.body}
                />
                {loading ? (
                  <SpinnerCircular size="25" color="black" />
                ) : (
                  <button
                    disabled={form.body === undefined || form.body === ""}
                    onClick={(e: SyntheticEvent) =>
                      submit(e, setLoading, item.id)
                    }
                  >
                    Envoyer
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListPost;
