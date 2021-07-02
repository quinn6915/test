import { authType } from "../CostumType";
import { useAuth } from "../context/Auth";
import { useToasts } from "react-toast-notifications";
import { useProvideAuth } from "../services/Auth";
import { SyntheticEvent, useState } from "react";
import { useAppDispatch } from "../hooks";
import { setUserConnected } from "../store/User";
import { ThreeDots } from "../css/threedots";

export default function Login() {
  const [loading, setLoading] = useState<Boolean>(false);
  const { addToast } = useToasts();
  const { form, handleChange } = useProvideAuth();
  const dispatch = useAppDispatch();

  let auth = useAuth() as authType;

  let login = (event: SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    auth.signin(() => {
      dispatch(setUserConnected(form.name));
      addToast("Bienvenue", {
        appearance: "success",
        autoDismiss: true,
      });
      setLoading(false);
    });
  };

  return (
    <>
      <form
        onSubmit={login}
        className="md:flex flex-col items-center justify-center "
      >
        <p className="text-lg">Connectez vous!</p>
        <div className="mb-3 space-y-2 md:flex flex-col w-2/3  ">
          <label className="font-semibold text-gray-600 py-2">Nom</label>
          <input
            required
            placeholder="entrez votre nom"
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-12 px-4"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        {loading ? (
          <ThreeDots color="silver" height="30" width="30" />
        ) : (
          <input
            type="submit"
            value="Se connecter"
            className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 my-4 rounded-lg  w-2/3"
          />
        )}
      </form>
    </>
  );
}
