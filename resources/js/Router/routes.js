const routes = [
    {
        path: "*",
        component: () => import('../Pages/NotFound404.vue'),
    },
    {
        path: '',
        component: () => import('../Pages/Home.vue'),
        name: 'home'
    },
    {
        path: "/login",
        name: "login",
        component: () => import('../Pages/Login.vue'),
        meta: { guestOnly: true }
    },
    {
        path: "/about",
        name: "about",
        component: () => import('../Pages/About.vue'),
        meta: { authOnly: true }
    }
];

export default routes;
