<template>
  <v-container>
    <img class="logo" width="100" src="logo.png" alt="">
    <h1>
      {{ count }}
    </h1>
    <v-btn
        color="primary"
        type="submit"
        @click="$store.commit('INCREMENT')"
    >
    カウント
    </v-btn>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapState({
      count: state => state.count
    }),
  }
}
</script>
