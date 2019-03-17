const vm = new Vue({
  el: '#app',
  data() {
    return{
      query:'',
      items:[],
      loading: true
      }
    },
  methods:{
    getResult(query){
      axios.get("https://www.googleapis.com/books/v1/volumes?q=search" + query).then(response => {
        this.items = response.data; //返されたデータをitemsに格納する
        this.loading = false;
      });
      }
    }
});