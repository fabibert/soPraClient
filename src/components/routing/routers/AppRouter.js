import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {GameGuard} from "components/routing/routeProtectors/GameGuard";
import GameRouter from "components/routing/routers/GameRouter";
import {LandingGuard} from "components/routing/routeProtectors/LandingGuard";
import Login from "components/views/Login";
import Register from "components/views/Register";
import Landing from "../../views/Landing";


/**
 * Main router of your application.
 * In the following class, different routes are rendered. In our case, there is a Login Route with matches the path "/login"
 * and another Router that matches the route "/game".
 * The main difference between these two routes is the following:
 * /login renders another component without any sub-route
 * /game renders a Router that contains other sub-routes that render in turn other react components
 * Documentation about routing in React: https://reacttraining.com/react-router/web/guides/quick-start
 */
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/game">
                    <GameGuard>
                        <GameRouter base="/game"/>
                    </GameGuard>
                </Route>
                <Route exact path="/login">
                    <LandingGuard>
                        <Login/>
                    </LandingGuard>
                </Route>
                <Route exact path="/register">
                    <LandingGuard>
                        <Register/>
                    </LandingGuard>
                </Route>
                <Route exact path="/landing">
                    <LandingGuard>
                        <Landing/>
                    </LandingGuard>
                </Route>
                <Route exact path="/">
                    <Redirect to="/game"/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

/*
* Don't forget to export your component!
 */
export default AppRouter;
