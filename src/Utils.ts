import { AlbumType, PhotoType, PostType, UserType } from "./api/types";

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

export function getPhotos(photos: PhotoType[], idAlbum: number) {
  const selectedPhotos = [] as any;
  photos.forEach((e: PhotoType) => {
    e.albumId === idAlbum &&
      selectedPhotos.push({
        photo: e.url,
        caption: e.id.toString(),
        subcaption: e.title,
        thumbnail: e.thumbnailUrl,
      });
  });
  return selectedPhotos;
}
