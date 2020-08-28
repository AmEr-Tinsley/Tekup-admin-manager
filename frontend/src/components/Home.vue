<template>
    <div>
        <h1>Hello HELLOOOOOOO</h1>
        <v-btn @click="get">clikc me</v-btn>
        {{wa}}
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            wa :''
        }
    },
    methods:{
        get(){
            Axios.get("/api/g")
              .then(res => {
                  this.wa = res.data
              }
              ).catch(error => {
                console.log(error);
              })
        }
    }
}
</script>