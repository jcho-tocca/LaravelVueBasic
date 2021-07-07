import User from "../../Apis/Admin/User"
import router from "../../Router"

export default {
    namespaced: true,
    state: {
        data : {},
        users: [],
        user: {},
        genders: [
            { id: '1', value: '男性'},
            { id: '2', value: '女性'},
            { id: '3', value: 'その他'},
        ],
        roles: [
            { id: '', value: '選択してください'},
            { id: '1', value: '管理者'},
            { id: '5', value: '一般ユーザー'}
        ],
        colors: []
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data;
        },
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        INIT_USER(state) {
            state.user = {};
        },
        DELETE_USER(state, index) {
            state.users.splice(index, 1);
        },
        SET_COLORS(state, colors) {
            state.colors = colors;
        },
    },
    actions: {
        getUsers({ commit }, page) {
            User.getUsers(page)
            .then(response => {
                commit("SET_DATA", response.data);
                commit("SET_USERS", response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
       getUser({ commit }, id) {
            commit("INIT_USER");
            return User.getUser(id)
                .then(response => {
                    commit("SET_COLORS", response.data.colors);
                    commit("SET_USER", response.data.user);
                    return response.data.user;
                })
                .catch(error => {
                    console.log(error);
                }
            );
        },
        updateUser({  }, user) {
            User.updateUser(user)
            .then(() => {
                router.push({ name: 'user.detail' ,params :{ id: user.id }});
            })
            .catch(error => {
                console.log(error);
            });
        },
        deleteUser({ commit }, { index, id }) {
            if(window.confirm('本当に削除しますか？')) {
                User.deleteUser(id)
                    .then(() => {
                        commit("DELETE_USER", index);
                    })
                    .catch(error => {
                        console.log(error);
                    }
                );
            }
        },
        fileDownLoad({ commit }, id) {
            User.fileDownLoad(id)
            .then(response => {
                if(response.status === 200) {
                    window.location = response.request.responseURL
                }
            })
            .catch(error => {
                if (error.response.status == 417) {
                    flash({ message: error.response.data.error,  type: 'error' });
                }
            });
        },
    }
}
