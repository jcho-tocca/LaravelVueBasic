<template>
    <v-container>
        <h1>マイページ</h1>
        <h2>お名前</h2>
        <p>{{ loginUser.name }}</p>
        <h2>メールアドレス</h2>
        <p>{{ loginUser.email }}</p>
    </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: 'my-page',
    computed: {
        ...mapState(["loginUser"])
    },
};
</script>
