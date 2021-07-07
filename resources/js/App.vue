<template>
<!-- App.vue -->
    <v-app>
        <Navbar v-if="isLogined"/>
        <!-- <v-navigation-drawer app> -->
        <!-- -->
        <!-- </v-navigation-drawer> -->

        <!-- <v-app-bar app> -->
        <!-- -->
        <!-- </v-app-bar> -->
        <!-- アプリケーションのコンポーネントに基づいてコンテンツのサイズを決定 -->
        <v-main><!-- アプリケーションに適切なgutterを提供します -->
            <!-- vue-routerを使用している場合 -->
            <router-view/>
        </v-main>

        <v-footer app>
        <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
// import './Styles/app.scss'
import { mapGetters } from "vuex";
export default {
    name: 'app',
    components: {
        Navbar: () => import('./Components/Navbar')
    },
    computed: {
        ...mapGetters(['isLogined'])
    },
}
</script>
