import Nav from "../components/common/ContentPage";
import nav_routes from "./routes_nav";
import routes_user from "./routes_user";
import UserList from "../components/user/UserList";


let routes = [
    {
        name: "用户",
        path: "/user/",
        routes: routes_user
    },
    {
        name: "Nav",
        path: "/nav/",
        routes: nav_routes
    },
    {
        name: "Nav_2",
        path: "/nav2/",
        component: UserList
    }
];

export default routes;