
const GoogleBooksApi = "'https://www.googleapis.com/books/v1/volumes?q=search";

function buildUrl(url){
  return GoogleBooksApi + url
}

const vm = new Vue({
  el: '#app',
  data: {
    results: [],
    keyword:'', //この記述がないと定義されていませんとエラーがでるようだ
  },
  mounted(){
    this.getItems(this.keyword);
  },
  methods:{
    getItems(keyword){
      let url = buildUrl(keyword); //なぜletを使うのか？
      axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch(error => {console.log(error);});
      
    }
  },
  computed:{ //computedってなんだ？
    processedItems(){
      let items = this.results;
    }
  }
});