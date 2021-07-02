import { ChangeEvent, useState } from "react";
import { getOneUser } from "../api";

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: () => void) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: () => void) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export function useProvideAuth() {
  const [user, setUser] = useState<String | null>(null);
  const [form, setForm] = useState<{ email: string }>({
    email: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  const signin = (cb: () => void) => {
    return fakeAuth.signin(async () => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb: () => void) => {
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
