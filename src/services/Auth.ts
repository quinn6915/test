import { ChangeEvent, useState } from "react";

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
  const [form, setForm] = useState<{ name: string }>({
    name: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

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
    form,
    user,
    signin,
    signout,
    handleChange,
  };
}
