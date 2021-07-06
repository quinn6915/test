import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from "../router/PrivateRoute";
import ProvideAuth from "../router/ProvideAuth";
import PrivatePage from "../layout/PrivatePage";
import LoadingBar from "react-top-loading-bar";
import { useRef } from "react";
import ListPost from "../components/post/ListPost";
import ListAlbum from "../components/album/ListAlbum";
import { Auth } from "../components/auth/Auth";
import ListTodo from "../components/todo/ListTodo";

export default function App() {
  const [loading, setLoading] = useState<Boolean>(true);
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current?.continuousStart();
    setTimeout(() => {
      ref.current.complete();
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ProvideAuth>
      <LoadingBar color="#f11946" ref={ref} />
      {loading ? (
        ""
      ) : (
        <div>
          <Router>
            <Switch>
              <PrivateRoute
                exact
                path="/Posts"
                layout={PrivatePage}
                component={ListPost}
              />
              <PrivateRoute
                path="/Albums"
                layout={PrivatePage}
                component={ListAlbum}
              />
              <PrivateRoute
                path="/Todos"
                layout={PrivatePage}
                component={ListTodo}
              />
              <PrivateRoute path="/" layout={PrivatePage} component={Auth} />
            </Switch>
          </Router>
        </div>
      )}
    </ProvideAuth>
  );
}
