<template>
    <v-card height=500 raised style="margin-left:2rem">
        
        <v-card-title class="centrify"> Teachers</v-card-title>
        
        <v-list >
            <v-virtual-scroll
            :items="teachers"
            :item-height="50"
             height="420"
            > 
                <template v-slot="{ item }">
                    <v-list-item link>
                        <v-icon >mdi-teach</v-icon>
                        <v-list-item-content class="centrify">
                            <v-list-item-title>{{ item }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-virtual-scroll>
      </v-list>
    </v-card>  
</template>

<style scoped>
    .centrify {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
/* eslint-disable */
export default {
    props : ["teachers"]
}
</script>