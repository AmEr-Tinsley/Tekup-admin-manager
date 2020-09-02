
export default {
    state : {
        teachers : ['Hamadi','samir','mohsen','Hamadi','samir']
    },
    getters : {
        teachers(state){
            return state.teachers;
        }
    }
    ,mutations : {
        add_teacher : (state ,teacher) => {
            state.teachers.unshift(teacher)
        }
    },
    actions : {
        add_teacher : (context,teacher) => {
            context.commit('add_teacher',teacher);
        }
    }
}