const userRoutes = [
    {
        path: "",
        name: "home",
        component: () => import('../Pages/User/Home.vue'),
        meta: { userOnly: true }
    },
    {
        path: "/mypage",
        name: "mypage",
        component: () => import('../Pages/User/MyPage.vue'),
        meta: { userOnly: true }
    }
];

export default userRoutes;
