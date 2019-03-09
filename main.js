
const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted(){
    axios.get("hogehoge")
    .then(response => {this.results = response.data.results})
  }
});