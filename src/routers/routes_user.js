import UserList from "../components/user/UserList";
import UserAdd from "../components/user/UserAdd";
import UserEdit from "../components/user/UserEdit";

let routes_user = [/*嵌套路由*/
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
];

export default routes_user;