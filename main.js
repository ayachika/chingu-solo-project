import Vue from "vue"

const vm = new Vue({
  el: '#app',
  data() {
    return{
      msg:'container',
      query:'Ayaka'
    }
      },
  methods:{
    getResult(query){
      alert(query);
    }
  },
});