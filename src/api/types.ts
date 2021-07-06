export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
};

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type AlbumType = {
  userId: number;
  id: number;
  title: string;
};

export type PhotoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type TodosType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type CommentInput = {
  body: string;
};

export type TodoInput = {
  title: string;
};
