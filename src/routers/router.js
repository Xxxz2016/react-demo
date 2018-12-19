import User from '../components/User';
import UserList from '../components/User/UserList';
import UserAdd from '../components/User/UserAdd';
import UserEdit from '../components/User/UserEdit';
import Home from "../components/Home";

let routes = [
    {
        name: "导航页面1 用户",
        path: "/user",
        component: User,
        exact: false,
        routes: [/*嵌套路由*/
            {
                name: "用户列表",
                icon: "bars",
                path: "/user/",
                component: UserList,
                exact: false
            },
            {
                name: "添加用户",
                icon: "copy",
                path: "/user/add",
                component: UserAdd,
                exact: false
            },
            {
                name: "编辑用户",
                icon: "download",
                path: "/user/edit",
                component: UserEdit,
                exact: false
            }
        ]
    },
    {
        name: "导航页面2",
        path: "/home",
        component: Home,
        exact: false
    },
    {
        name: "导航页面3",
        path: "/home",
        component: Home,
        exact: false
    },
    {
        name: "导航页面4",
        path: "/home",
        component: Home,
        exact: false
    }
];

export default routes;