export function UserName(
  data,
  users
) {
  return users.map((u) => {
    return u.id === data.userId && u.name;
  });
}

export function UserStreet(data, users) {
  return users.map((u) => {
    return u.id === data.userId && u.address.street;
  });
}

export function UserSuite(data, users) {
  return users.map((u) => {
    return u.id === data.userId && u.address.suite;
  });
}

export function UserCity(data, users) {
  return users.map((u) => {
    return u.id === data.userId && u.address.city;
  });
}

export function getPhotos(photos, idAlbum) {
  const selectedPhotos = [];
  photos.forEach((e) => {
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
