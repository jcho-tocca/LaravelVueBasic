import Api from "../Api";
import Csrf from "../Csrf"

export default {
    async getUsers(page) {
        await Csrf.getCookie();
        return Api.get("/admin/users", {
            params: {
              page: parseInt(page),	// /admin/users?page=[page]の形
            }
        });
    },
    async getUser(id) {
        await Csrf.getCookie();
        return Api.get("/admin/users/" + id);
    },
    async create(form) {
        await Csrf.getCookie();
        return Api.post("/admin/users", form);
    },
    async updateUser(user) {
        await Csrf.getCookie();
        return Api.post("/admin/users/" + user.get('id'), user);
    },
    async deleteUser(id) {
        await Csrf.getCookie();
        return Api.delete("/admin/users/" + id);
    },
    async fileDownLoad(id) {
        await Csrf.getCookie();
        return Api.get("/admin/users/" + id + "/download");
    }
};
