import SubNav1 from "../components/nav/SubNav1";
import SubNav2 from "../components/nav/SubNav2";
import SubNav3 from "../components/nav/SubNav3";

let user_routes = [/*嵌套路由*/
    {
        name: "SubNav1",
        icon: "bars",
        path: "/nav/",
        component: SubNav1,
        exact: false
    },
    {
        name: "SubNav2",
        icon: "copy",
        path: "/nav/sub2",
        component: SubNav2,
        exact: false
    },
    {
        name: "SubNav3",
        icon: "download",
        path: "/nav/sub3",
        component: SubNav3,
        exact: false
    }
];

export default user_routes;