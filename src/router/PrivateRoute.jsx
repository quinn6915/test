import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/Auth";

export const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.user ? (
          <Redirect
            to={{
              pathname: "/accueil",
              state: { from: props.location },
            }}
          />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    ></Route>
  );
};

export const PrivateRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
