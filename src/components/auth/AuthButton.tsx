import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "../../context/Auth";
import { authType } from "../../CostumType";
import { useAppSelector } from "../../hooks";
import { ThreeDots } from "../../css/threedots";

export function AuthButton() {
  const user = useAppSelector((state) => state.user);
  const { addToast } = useToasts();
  const [loading, setLoading] = useState<Boolean>(false);

  let auth = useAuth() as authType;

  return auth.user ? (
    <div className="flex flex-col items-center justify-center sm:mt-44 ">
      <p className="text-lg text-white">Bonjour {user.user?.name} !</p>
      {loading ? (
        <ThreeDots color="silver" height="30" width="30" />
      ) : (
        <button
          className="text-white bg-gray-500 p-2 my-4 rounded-lg w-1/4"
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
