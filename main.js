var app = new Vue({
  el: '#app',
  data: {
    items: []
  },
  watch:{ //watchの意味を理解する
    keyword: function(newKeyword,oldKeyword){
    // loadash.debounceを利用してAPI呼び出しの負荷軽減  
      this.message="入力が終わるのを待っています";
      this.debouncedGetAnswer();
    }
  },
  created: function(){
    //loadash.debounceによって、１秒間操作がなくなった時点でAPI呼び出し実施
    //キー入力のたびにAPIを呼び出すような負荷をかけないため
    this.debouncedGetAnswer = _.debounce(this.getAnswer,1000);
  },
  methods:{
    getAnswer: function(){
      //キーワードが空の場合は、メッセージと検索結果を空にして処理終了
      if(this.keyword===''){
        this.items = null;
        this.message = '';
        return;
      }
      
      this.message = '検索しています・・・';
      var vm = this;
      var params = {page:1, per_page: 20, query: this.keyword };
      axios.get('https://www.googleapis.com/books/v1/volumes?q=search' + {params})
      .then(function(response){
        console.log(response);
        vm.items = response.data;
      })
      .catch(function(error){
        vm.message = 'Error!' + error;
      })
      .catch(function(){
        vm.message='';
      })
    }
    
  }
})