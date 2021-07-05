import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from "../router/PrivateRoute";
import ProvideAuth from "../router/ProvideAuth";
import PrivatePage from "../layout/PrivatePage";
import LoadingBar from "react-top-loading-bar";
import { useRef } from "react";
import ListPost from "../components/post/ListPost";
import ListAlbum from "../components/album/ListAlbum";
import { Auth } from "../components/Auth";

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
        <div className="flex flex-row justify-center">
          <div className=" w-5/6 ">
            <Router>
              <Switch>
                <PrivateRoute
                  exact
                  path="/"
                  layout={PrivatePage}
                  component={ListPost}
                />
                <PrivateRoute
                  path="/albums"
                  layout={PrivatePage}
                  component={ListAlbum}
                />
              </Switch>
            </Router>
          </div>
          {/*<div className="w-1/3 mt-12 ">
            <Auth />
      </div>*/}
        </div>
      )}
    </ProvideAuth>
  );
}
