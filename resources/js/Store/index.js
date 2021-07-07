import Vue from 'vue';
import Vuex from 'vuex'
import Auth from "../Apis/Auth";
import router from "../Router"
import user from "../Store/Admin/user"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user
    },
    state: {
        count: 0,
        loginUser: null,
        errors: []
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        // エラーメッセージリセット
        RESET_LOGIN_ERRORS(state) {
            state.errors = [];
        },
        // ログイン成功時
        LOGIN_SUCCESS(state, user) {
            state.loginUser = user;
            state.errors = [];
        },
        // ログイン失敗時
        LOGIN_FAILED(state, errors = []) {
            state.errors = errors;
        },
        // ログアウト
        LOGOUT(state) {
            state.loginUser = null;
        }
    },
    actions: {
        // ログイン
        login({ state, commit }, loginObj) {
            commit("RESET_LOGIN_ERRORS");

            Auth.login(loginObj.form)
            .then(response => {
                commit("LOGIN_SUCCESS", response.data.user);

                if(state.loginUser.role == 1) {
                    router.push({ name: "dashboard" });
                } else if (state.loginUser.role == 5) {
                    router.push({ name: "home" });
                }
            })
            .catch(error => {
                if(error.response) {
                    commit("LOGIN_FAILED", error.response.data.errors);
                } else {
                    commit("LOGIN_FAILED");
                }
            });
        },
        // ログアウト
        logout({ commit }) {
            Auth.logout().then(() => {
                commit("LOGOUT");
                router.push({ name: "login" }).catch(err => {});
            });
        },
        // ログインユーザー情報取得
        getLoginUserInfo({ commit }) {
            return Auth.getLoginUserInfo()
            .then(response => {
                commit("LOGIN_SUCCESS", response.data.user);
                return true;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
        },
    },
    getters: {
        // ログイン確認
        isLogined: state => {
            return state.loginUser !== null;
        },
        // 管理者権限確認
        isAdmin: state => {
            return state.loginUser !== null && state.loginUser.role == 1;
        },
        // ユーザー権限確認
        isUser: state => {
            return state.loginUser !== null && state.loginUser.role == 5;
        }
    }
});

export default store;
