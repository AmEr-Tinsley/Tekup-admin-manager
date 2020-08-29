<template>
    <div>
        <h1>Hello HELLOOOOOOO</h1>
        <v-btn @click="get">clikc me</v-btn>
        {{wa}}
    </div>
</template>

<script>
/* eslint-disable */
export default {
    computed :{
        wa(){
            return this.$store.getters.wa;
        }
    },
    methods:{
        get(){
            this.$store.dispatch('change_wa');
        }
    }
}
</script>