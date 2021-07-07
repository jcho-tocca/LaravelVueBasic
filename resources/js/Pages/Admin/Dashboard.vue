<template>
  <v-container>
    <h1>
      {{ count }}
    </h1>
    <v-btn class="btn" @click="$store.commit('INCREMENT')">INCREMENT</v-btn>
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
