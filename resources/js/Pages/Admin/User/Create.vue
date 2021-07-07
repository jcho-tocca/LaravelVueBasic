<template>
    <v-container>
        <h1>ユーザー登録</h1>
        <v-form>
            <v-text-field
                v-model="form.name"
                name="name"
                label="お名前"
                required
            ></v-text-field>
            <v-alert type="error" v-if="errors.name">
                {{ errors.name[0] }}
            </v-alert>
            <p>性別</p>
             <v-container>
                <v-radio-group v-model="form.gender">
                    <v-row>
                        <template v-for="gender in genders">
                            <v-col :key="gender.id">
                                <v-radio
                                    :label="`${gender.value}`"
                                    :value="`${gender.id}`"
                                ></v-radio>
                            </v-col>
                        </template>
                    </v-row>
                </v-radio-group>
            </v-container>
            <v-alert type="error" v-if="errors.gender">
                {{ errors.gender[0] }}
            </v-alert>
            <v-select
                name="role"
                :items="roles"
                v-model="form.role"
                item-text="value"
                item-value="id"
                label="権限"
            ></v-select>
            <v-alert type="error" v-if="errors.role">
                {{ errors.role[0] }}
            </v-alert>
            <v-text-field
                v-model="form.email"
                name="email"
                label="メールアドレス"
                required
            ></v-text-field>
            <v-alert type="error" v-if="errors.email">
                {{ errors.email[0] }}
            </v-alert>
            <p>好きな色</p>
                <v-row class="ma-1">
                    <v-col>
                        <v-checkbox
                            v-model="form.favorite_colors"
                            name="favorite_colors"
                            label="青"
                            color="blue"
                            value="1"
                            hide-details
                        ></v-checkbox>
                    </v-col>
                    <v-col>
                        <v-checkbox
                            v-model="form.favorite_colors"
                            name="favorite_colors"
                            label="赤"
                            color="red"
                            value="2"
                            hide-details
                        ></v-checkbox>
                    </v-col>
                    <v-col>
                        <v-checkbox
                            v-model="form.favorite_colors"
                            name="favorite_colors"
                            label="緑"
                            color="green"
                            value="3"
                            hide-details
                        ></v-checkbox>
                    </v-col>
                </v-row>
            <v-alert type="error" v-if="errors.favorite_colors">
                {{ errors.favorite_colors[0] }}
            </v-alert>
            <img v-if="uploadImageUrl" :src="uploadImageUrl" />
            <v-file-input
                v-model="form.file"
                name="file"
                accept="image/*"
                show-size
                label="画像ファイルをアップロードしてください"
                prepend-icon="mdi-image"
                @change="onImagePicked"
            ></v-file-input>
            <v-alert type="error" v-if="errors.file">
                {{ errors.file[0] }}
            </v-alert>
            <v-text-field
                v-model="form.password"
                type="password"
                name="password"
                label="パスワード"
                hint="8文字以上入力してください"
                counter
            ></v-text-field>
            <v-alert type="error" v-if="errors.password">
                {{ errors.password[0] }}
            </v-alert>
            <v-text-field
                v-model="form.password_confirmation"
                type="password"
                name="password_confirmation"
                label="パスワード確認"
                hint="8文字以上入力してください"
                counter
            ></v-text-field>
            <v-alert type="error" v-if="errors.password_confirmation">
                {{ errors.password_confirmation[0] }}
            </v-alert>
            <v-btn
                color="primary"
                type="submit"
                @click.prevent="register"
            >
            登録
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
import { mapState } from "vuex";
import User from "../../../Apis/Admin/User"
import Mixin from '../../../Mixins/mixin'

export default {
    data() {
        return {
            form: {
                name: '',
                gender: '',
                email: '',
                role: null,
                favorite_colors: [],
                file: null,
                password: '',
                password_confirmation: ''
            },
            uploadImageUrl: '',
            errors: []
        }
    },
    mixins: [Mixin],
    computed: {
        ...mapState({
            genders: state => state.user.genders,
            roles: state => state.user.roles
        })
    },
    methods: {
        // 登録
        register() {
            const data = this.createFormData(this.form);

            User.create(data)
                .then(response => {
                    this.$router.push({ name: "admin.user" });
                    flash({ message: response.data.message, type: 'success' });
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        this.errors = error.response.data.errors;
                    }

                    if (error.response.status == 417) {
                        flash({ message: error.response.data.error,  type: 'error' });
                    }
                }
            );
        },
        // 画像表示
        onImagePicked(file) {
            if (file !== undefined && file !== null) {
                if (file.name.lastIndexOf('.') <= 0) {
                    return;
                }
                const fr = new FileReader();
                fr.readAsDataURL(file);
                fr.addEventListener('load', () => {
                    this.uploadImageUrl = fr.result;
                });
            } else {
                this.uploadImageUrl = '';
            }
        }
    }
}
</script>
