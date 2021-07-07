<template>
    <v-container v-if="users[0]">
        <h1>ユーザー一覧</h1>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                        ユーザー名
                    </th>
                    <th class="text-left">
                        メールアドレス
                    </th>
                    <th class="text-left">
                        作成日
                    </th>
                    <th class="text-left">
                        詳細
                    </th>
                    <th class="text-left">
                        編集
                    </th>
                    <th class="text-left">
                        削除
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,index) in users" v-bind:key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.created_at }}</td>
                    <td><v-btn color="info" :to="`user/${user.id}`">詳細</v-btn></td>
                    <td><v-btn color="success" :to="`user/${user.id}/edit`">編集</v-btn></td>
                    <td><v-btn color="error" type="submit" @click.prevent="deleteUser({index: index, id: user.id})">削除</v-btn></td>
                </tr>
            </tbody>
            <div class="text-center">
                <v-pagination
                    :value="current_page"
                    :length="last_page"
                    @input = "load"
                ></v-pagination>
            </div>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import _ from "lodash";

export default {
    created() {
        let page = 1;

        if(this.$route.query.page) {
            page = this.$route.query.page;
        }

        this.load(page);
    },
    computed: {
        ...mapState({
            users: state => state.user.users,
            current_page: state => state.user.data.current_page,
            last_page: state => state.user.data.last_page,
            total: state => state.user.data.total,
            from: state => state.user.data.from,
            to: state => state.user.data.to,
        })
    },
    methods: {
        ...mapActions("user", ["getUsers", "deleteUser"]),
       async load(page) {
            await this.getUsers(page);
            this.$router.push({ name: 'admin.user', query: { page: page } }).catch(()=>{});
        }
    }
}
</script>
