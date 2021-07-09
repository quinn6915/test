import { useState } from "react";
import { getOneUser } from "../api";

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  async function connect() {
    const response = await getOneUser(form.email).then((data) => {
      return data;
    });

    return response;
  }

  const signin = (cb) => {
    return fakeAuth.signin(async () => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    connect,
    form,
    user,
    signin,
    signout,
    handleChange,
  };
}
