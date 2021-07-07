<template>
    <div>
        <v-app-bar color="blue darken-4" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>{{ isUser ? 'ユーザー画面' : '管理者画面' }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn v-if="loginUser" depressed color="blue darken-4" dark>{{ loginUser.name }}</v-btn>
                <v-btn v-else route :to="{ name: 'login' }" depressed color="blue darken-4" dark>ログイン</v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item v-if="isAdmin" route :to="{ name: 'dashboard' }" exact>
                        <v-list-item-icon>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>ダッシュボード</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="isAdmin" route :to="{ name: 'admin.user' }" exact>
                        <v-list-item-icon>
                            <v-icon>mdi-account-multiple-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>ユーザー一覧</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="isAdmin" route :to="{ name: 'admin.user.create' }" exact>
                        <v-list-item-icon>
                            <v-icon>mdi-account-multiple-plus</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>ユーザー登録</v-list-item-title>
                    </v-list-item>
                     <v-list-item v-if="isUser" route :to="{ name: 'home' }" exact>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>トップページ</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="isUser" route :to="{ name: 'mypage' }" exact>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>マイページ</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="loginUser === null" route :to="{ name: 'login' }" exact>
                        <v-list-item-icon>
                            <v-icon>mdi-account-multiple-plus</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>ログイン</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="loginUser !== null" @click="logout">
                        <v-list-item-icon>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title @click="logout">ログアウト</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <Flash message=""></flash>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Flash from './Flash.vue';

export default {
  components: { Flash },
    name: 'navbar',
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed: {
        ...mapState(["loginUser"]),
        ...mapGetters(["isAdmin", "isUser"])
    },
    methods: {
        ...mapActions(["logout"])
    }
};
</script>
