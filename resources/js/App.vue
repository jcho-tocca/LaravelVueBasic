<template>
<!-- App.vue -->
    <v-app>
        <Navbar />
        <!-- <v-navigation-drawer app> -->
        <!-- -->
        <!-- </v-navigation-drawer> -->

        <!-- <v-app-bar app> -->
        <!-- -->
        <!-- </v-app-bar> -->
        <!-- アプリケーションのコンポーネントに基づいてコンテンツのサイズを決定 -->
        <v-main><!-- アプリケーションに適切なgutterを提供します -->
            <v-container fluid>
                <!-- vue-routerを使用している場合 -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>
        <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
// import './Styles/app.scss'
export default {
    name: 'app',
    components: {
        Navbar: () => import('./Components/Navbar')
    }
}
</script>
