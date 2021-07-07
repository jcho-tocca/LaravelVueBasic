<template>
    <v-container v-if="user.id">
        <h1>ユーザ詳細</h1>
        <h2>ユーザーID</h2>
        <p>{{ user ? user.id : '' }}</p>
        <h2>お名前</h2>
        <p>{{ user ? user.name : '' }}</p>
        <h2>性別</h2>
        <p>{{ user ? gender : '' }}</p>
        <h2>権限</h2>
        <p>{{ user ? role : '' }}</p>
        <h2>メールアドレス</h2>
        <p>{{ user ? user.email : '' }}</p>
        <h2>好きな色</h2>
        <template v-if="user">
            <div v-for="user_favorite_color in user.user_favorite_colors" :key="user_favorite_color.id">
                <p>{{ user_favorite_color.color.name }}</p>
            </div>
        </template>
        <h2>画像ファイル</h2>
        <img :src="`${ user ? user.file_path : ''}`" alt="" @click="downLoad()">
        <p></p>
        <v-btn color="success" :to="`${this.$route.params.id}/edit`">編集</v-btn>
    </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    async created() {
        await this.getUser(this.$route.params.id);
    },
    computed: {
        ...mapState({
            user: state => state.user.user,
            genders: state => state.user.genders,
            roles: state => state.user.roles
        }),
        gender() {
            return this.genders[this.genders.findIndex(i=>i.id == this.user.gender)]?.value;
        },
        role() {
            return this.roles[this.roles.findIndex(i=>i.id == this.user.role)]?.value;
        }
    },
    methods: {
        ...mapActions("user", ["getUser", "fileDownLoad"]),
        downLoad() {
            return this.fileDownLoad(this.$route.params.id);
        }
    }
}
</script>
