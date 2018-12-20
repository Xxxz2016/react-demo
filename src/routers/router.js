import Nav from "../components/Nav";
import nav_routes from "./routes_nav";
import routes_user from "./routes_user";


let routes = [
    {
        name: "用户",
        path: "/user/",
        component: Nav,
        exact: false,
        routes: routes_user
    },
    {
        name: "Nav",
        path: "/nav/",
        component: Nav,
        exact: false,
        routes: nav_routes
    },
    {
        name: "Nav_2",
        path: "/nav2/",
        component: Nav,
        exact: false
    }
];

export default routes;