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

export type ItemCarType = PostType & {
  _id: string;
  imageUrl: string;
  date: string;
  comments: [comType];
  user: {
    _id: string;
    name: string;
  };
};

export type comType = {
  _id: string;
  date: string;
  content: string;
  user: {
    _id: string;
    name: string;
  };
};

export type CommentInput = {
  [index: number]: string;
  user: string | null;
};
