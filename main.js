
const GoogleBooksApi = "https://www.googleapis.com/books/v1/volumes?q=search";


function buildUrl(url){
  return GoogleBooksApi + url
}

const vm = new Vue({
  el: '#app',
  data: {
    items: null,
    keyword:'',//この記述がないと定義されていませんとエラーがでるようだ
    title:'',
    author:'',
  },
  methods:{
    getItems(keyword){
     const url = buildUrl(keyword);
     return axios.get(url).then(response =>
     (this.items = response))
     .catch(error => {
       console.log(error)
     })
    },
  }
});