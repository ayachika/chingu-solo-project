const vm = new Vue({
  el: '#app',
  data() {
    return{
      query:'',
      results:[]
      }
    },
  methods:{
    getResult(query){
      axios.get("https://www.googleapis.com/books/v1/volumes?q=search" + query).then(response => {console.log(response.data);
        this.results = response.data; //返されたデータをitemsに格納する
        
      });
      }
    }
});