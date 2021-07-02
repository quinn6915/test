import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "../context/Auth";
import { authType } from "../CostumType";
import { useAppSelector } from "../hooks";
import { ThreeDots } from "../css/threedots";

export function AuthButton() {
  const user = useAppSelector((state) => state.user);
  const { addToast } = useToasts();
  const [loading, setLoading] = useState<Boolean>(false);

  let auth = useAuth() as authType;

  return auth.user ? (
    <div className="md:flex flex-col items-center justify-center mt-8">
      <p className="text-lg">Bonjour {user.user?.name} !</p>
      {loading ? (
        <ThreeDots color="silver" height="30" width="30" />
      ) : (
        <button
          className="bg-gray-500 text-white font-bold text-lg hover:bg-gray-700 p-2 my-4 rounded-lg  w-2/3"
          onClick={() => {
            setLoading(true);

            auth.signout(() => {
              addToast("Vous êtes déconnecté", {
                appearance: "info",
                autoDismiss: true,
              });
              setLoading(false);
            });
          }}
        >
          Se déconnecter
        </button>
      )}
    </div>
  ) : (
    <p className="flex justify-center mt-1">Vous n'êtes pas authentifié</p>
  );
}
