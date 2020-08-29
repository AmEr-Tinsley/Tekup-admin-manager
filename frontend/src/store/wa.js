
export default {
    state : {
        wa :''
    },
    getters : {
        wa(state){
            return state.wa;
        }
    }
    ,mutations : {
        change_wa : (state) => {
            state.wa = 'hello ?'
        }
    },
    actions : {
        change_wa : context => {
            context.commit('change_wa');
        }
    }
}