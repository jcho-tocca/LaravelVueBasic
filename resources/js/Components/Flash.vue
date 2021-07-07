<template>
    <transition name="fade">
        <v-alert :type="type" class="mt-1" v-if="show">
            {{ body }}
        </v-alert>
    </transition>
</template>

<script>
export default {
    props: ['messageObj'],
    data() {
        return {
            show : false,
            type : '',
            body : '',
        }
    },
    created() {
        if(this.messageObj) {
            this.flash(this.messageObj);
        }
        window.events.$on('flash', (messageObj) => {
            this.flash(messageObj)
        });
    },
    methods: {
        flash({ message, type }) {
            this.show = true;
            this.body = message;
            this.type = type;

            setTimeout(() => {
                this.hide();
            }, 5000)
        },
        hide() {
            this.show = false;
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
