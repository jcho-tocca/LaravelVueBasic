const adminRoutes = [
    {
        path: "/admin",
        name: "dashboard",
        component: () => import('../Pages/Admin/Dashboard.vue'),
        meta: { adminOnly: true }
    },
    {
        path: "/admin/create",
        name: "admin.user.create",
        component: () => import('../Pages/Admin/User/Create.vue'),
        meta: { adminOnly: true },
    },
    {
        path: "/admin/user",
        name: "admin.user",
        component: () => import('../Pages/Admin/User/Index.vue'),
        meta: { adminOnly: true },
    },
    {
        path: "/admin/user/:id",
        name: "admin.user.detail",
        component: () => import('../Pages/Admin/User/Detail.vue'),
        meta: { adminOnly: true },
    },
    {
        path: "/admin/user/:id/edit",
        name: "admin.user.edit",
        component: () => import('../Pages/Admin/User/Edit.vue'),
        meta: { adminOnly: true },
    }
];

export default adminRoutes;
