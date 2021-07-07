const routes = [
    {
        path: "*",
        component: () => import('../Pages/NotFound404.vue'),
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "home" */ '../Pages/Login.vue'),
        meta: { guestOnly: true },
    }
];

export default routes;
