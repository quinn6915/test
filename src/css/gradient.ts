import classNames from "classnames";

export const post = classNames(
  "bg-gradient-to-br",
  "from-yellow-400 ",
  "to-yellow-800 ",
  "-rotate-6"
);

export const album = classNames(
  "bg-gradient-to-br",
  "from-gray-900 ",
  "to-black-800",
  "-rotate-3"
);

export const todo = classNames(
  "bg-gradient-to-tl",
  "from-pink-400",
  "to-purple-600",
  "rotate-3"
);

export const secondPost = classNames("-rotate-3");
export const secondAlbum = classNames("-rotate-0");
export const secondTodo = classNames("rotate-0");

export function gradient(path: string) {
  if (path === "/Posts") {
    return post;
  }
  if (path === "/Albums") {
    return album;
  }
  if (path === "/Todos") {
    return todo;
  }
}

export function gradientGray(path: string) {
  if (path === "/Posts") {
    return secondPost;
  }
  if (path === "/Albums") {
    return secondAlbum;
  }
  if (path === "/Todos") {
    return secondTodo;
  }
}
