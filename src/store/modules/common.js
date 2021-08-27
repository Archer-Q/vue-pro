export default {
  state: {
    menu: [],
    activeIndex: ""
  },
  mutations: {
    SET_MENU(state, value){
      state.menu = value;
      sessionStorage.setItem('breadData',JSON.stringify(value));
    },
    SET_CURINDEX(state, value){
      state.activeIndex = value;
      sessionStorage.setItem('activeIndex',value);
      console.log()
    }
  },
}
