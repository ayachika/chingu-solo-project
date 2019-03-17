const vm = new Vue({
  el: '#app',
  data() {
    return{
      query:'',
      items:[],
      loading: false
      }
    },
  methods:{
    getResult(query){
      axios.get("https://www.googleapis.com/books/v1/volumes?q=search" + query).then(response => {
        this.loading = true;
        this.items = response.data; //返されたデータをitemsに格納する
        this.loading = false; //初期状態ではloadingプロパティをtrueにしておき、axiosでのAPI通信が終わった時点でfalseにする
      });
      }
    }
});