
const GoogleBooksApi = "https://www.googleapis.com/books/v1/volumes?q=search";


function buildUrl(url){
  return GoogleBooksApi + url
}

const vm = new Vue({
  el: '#app',
  data: {
    items: [],
    keyword:'',//この記述がないと定義されていませんとエラーがでるようだ
    title:'',
    author:'',
  },
  methods:{
    getItems(keyword){
     let url = buildUrl(keyword);
     axios.get(url).then((response) =>
     {this.items = response.data.items;
     }).catch((error) => {
       console.log(error);
     });
    }
  },
});