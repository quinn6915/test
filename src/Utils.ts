import { AlbumType, PostType, UserType } from "./api/types";

export function UserName(data: PostType | AlbumType, users: UserType[]) {
  return users.map((u) => {
    return u.id === data.userId && u.name;
  });
}

export function UserStreet(data: PostType | AlbumType, users: UserType[]) {
  return users.map((u) => {
    return u.id === data.userId && u.address.street;
  });
}

export function UserSuite(data: PostType | AlbumType, users: UserType[]) {
  return users.map((u) => {
    return u.id === data.userId && u.address.suite;
  });
}

export function UserCity(data: PostType | AlbumType, users: UserType[]) {
  return users.map((u) => {
    return u.id === data.userId && u.address.city;
  });
}
