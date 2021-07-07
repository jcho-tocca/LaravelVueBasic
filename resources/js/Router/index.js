import VueRouter from 'vue-router';
import routes from './routes';
import adminRoutes from './adminRoutes';
import userRoutes from './userRoutes';
import store from '../Store';

const router = new VueRouter({
    mode: 'history',
    routes: [
        ...routes,
        ...adminRoutes,
        ...userRoutes
    ]
});

// ログインチェック
function isLogined() {
    return store.state.loginUser;
}

// 管理者権限確認
function isAdmin() {
    return isLogined() && store.state.loginUser.role == 1;
}

// 一般ユーザー確認
function isUser() {
    return isLogined() && store.state.loginUser.role == 5;
}

router.beforeEach(async (to, from, next) => {

    // ユーザー情報取得
    if(store.state.loginUser || await store.dispatch("getLoginUserInfo")) {

        // ログイン画面
        if (to.matched.some(record => record.meta.guestOnly)) {
            if (isLogined()) {
                if(store.state.loginUser.role == 1) {
                    next('/admin');
                } else if (store.state.loginUser.role == 5) {
                    next('/');
                }
            } else {
                next();
            }
        }
        // 管理者画面
        else if (to.matched.some(record => record.meta.adminOnly)) {
            if (!isAdmin()) {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                });
            } else {
                next();
            }
        // ユーザー画面
        } else if (to.matched.some(record => record.meta.userOnly)) {
            if (!isUser()) {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                });
            } else {
                next();
            }
        }
    } else {
        next();
    }
});

export default router;
