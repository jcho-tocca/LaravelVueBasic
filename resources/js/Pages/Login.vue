<template>
    <v-container fill-height style="max-width:450px">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-card>
                    <v-toolbar flat color="blue-grey lighten-5">
                        <v-toolbar-title>ログイン</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                        <v-text-field
                            v-model="form.email"
                            name="email"
                            label="メールアドレス"
                            required
                        ></v-text-field>
                        <v-alert type="error" v-if="errors.email">
                        {{ errors.email[0] }}
                        </v-alert>
                        <v-text-field
                            v-model="form.password"
                            type="password"
                            name="password"
                            label="パスワード"
                            hint="8文字以上"
                        ></v-text-field>
                        <v-alert type="error" v-if="errors.password">
                        {{ errors.password[0] }}
                        </v-alert>
                        <v-btn
                            class="mt-6 mb-3"
                            depressed
                            large
                            block
                            color="blue darken-4"
                            dark
                            @click.prevent="login({ form : form, errors: errors })"
                        >
                        ログイン
                        </v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            form: {
                email: null,
                password: null,
            },
        };
    },
    computed: {
        ...mapState(["errors"])
    },
    methods: {
        ...mapActions(["login"])
    }
};
</script>
