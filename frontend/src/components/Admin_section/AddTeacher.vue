<template>
    <div>
        <v-container>
            <v-row >
                <v-col cols="6">
                    <h1>Add a Teacher ?</h1>
                    <div style="margin-top:8rem">
                        <v-text-field v-model="name" label="Name"></v-text-field>
                        <v-text-field v-model="email" label="Email if possible"></v-text-field>
                        <br>
                        <v-btn color='primary' @click="add">Add Teacher</v-btn>
                        <br>
                        <br>
                        <strong style='color:green'>{{successadd}}</strong>
                    </div>
                </v-col>

                <v-col cols="6">
                    <h1></h1>
                    <br>
                   <DisplayTeachers :teachers = "teachers"/>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>

/* eslint-disable */
import DisplayTeachers from './AddTeacherComponents/DisplayTeachers'
export default {
    components:{
        DisplayTeachers
    },
    computed :{
        teachers(){
            return this.$store.getters.teachers;
        }
    },
    data(){
        return {
            name:'',
            email:'',
            successadd:''
        }
    },
    methods : {
        add(){
            this.$store.dispatch('add_teacher',this.name)
            this.successadd = 'Teacher added !'
            setTimeout(() => { this.successadd = '' }, 1000);
            this.name = ''
            this.email = ''
        }
    }
}
</script>