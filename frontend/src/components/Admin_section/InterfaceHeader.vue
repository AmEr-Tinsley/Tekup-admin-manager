<template>
    <div>
      <v-app-bar
        absolute
        style="background-color:#331391;"
        dark
        inverted-scroll
      >
        <v-toolbar-title>Admin manager</v-toolbar-title>
        <v-spacer></v-spacer>
       
         <v-btn text medium to="/addteacher">Add Teacher</v-btn>
          <v-btn text medium to="/addclass">Add Class</v-btn>
          <v-btn text medium style="margin-right:1rem" to="addcourse">Add Course</v-btn>
          
          <v-btn color='primary'>
                Logout
          </v-btn>
      </v-app-bar>

    </div>
</template>

<script>
export default {
  
}
</script>

