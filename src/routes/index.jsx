import Register from "../pages/Register";
import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { useEffect, useState } from "react";
import Dashboard from "../pages/Dashboard";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route exact path="/register">
        <Register authenticated={authenticated} />
      </Route>
      <Route exact path="/sessions">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
}

export default Routes;
