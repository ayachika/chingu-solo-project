
const GoogleBooksApi = "https://www.googleapis.com/books/v1/volumes?q=search";


function buildUrl(url){
  return GoogleBooksApi + url
}

var app = new Vue({
  el: '#app',
  data: {
    items: null,
    message:'',
    keyword:'', //この記述がないと定義されていませんとエラーがでるようだ
  },
  methods:{
    getAnswer: function(){
        // キーワードが空の場合はメッセージと検索結果を空にして処理終了
        if( this.keyword === ''){
          this.items = null;
          this.message = '';
          return;
        }
 
        this.message = 'loading...';
        var vm = this;
    var params = {query: this.keyword };
    let url = buildUrl(params); //なぜletを使うのか？
      axios.get(url).then(function(response){
            console.log(response);
            vm.items = response.data;
          })
          .catch(function(error){
            vm.message = 'Error!' + error;
          })
          .finally(function(){
            vm.message = '';
          })
    }
  },
});