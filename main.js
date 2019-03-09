import Vue from 'vue'
import axios from 'axios'; //呼び出し方あっているか？
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
  watch: {
      keyword: function(newKeyword, oldKeyword){
        // lodash.debounceを利用してAPI呼び出しの負荷軽減
        this.message = '入力が終わるのを待ってます･･･';
        this.debouncedGetAnswer();
      }
    },
    created: function() {
      // lodash.debounce によって、1秒間操作が無くなった時点でAPI呼び出し実施
      // キー入力の度にAPIを呼び出すような負荷をかけないため
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
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