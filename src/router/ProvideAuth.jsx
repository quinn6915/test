import { authContext } from "../context/Auth";
import { useProvideAuth } from "../services/Auth";

export default function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
