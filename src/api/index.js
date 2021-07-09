import axios from "axios";
import { URL_API } from "../constants/config";

export async function getAllPost() {
  return await axios
    .get(`${URL_API}/posts`)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function getAllUser() {
  return await axios
    .get(`${URL_API}/users`)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function getAllComment() {
  return await axios
    .get(`${URL_API}/comments`)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function getAllAlbum() {
  return await axios
    .get(`${URL_API}/albums`)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function getAllPhoto() {
  return await axios
    .get(`${URL_API}/photos`)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function getOneUser(email) {
  return await fetch(`${URL_API}/users?email=${email}`)
    .then((res) => res.json())
    .catch((error) => error);
}

export async function comment(value) {
  return await fetch(`${URL_API}/comments`, {
    method: "POST",
    body: JSON.stringify({
      body: value.body,
      email: value.email,
      name: value.name,
      postId: value.postId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((error) => error);
}

export async function getAllTodo() {
  return await axios
    .get(`${URL_API}/todos`)
    .then((res) => res.data)
    .catch((error) => error);
}
