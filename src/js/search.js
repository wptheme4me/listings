var app = new Vue({
   el: '#app',
   data: {
      search_res: '',
      kambariu_sk: '',
      aukstas: '',
      butai: butu_listas
   },
   computed: {
    showList: function() {
      var adresas = this.search_res;
      var kambariu_sk = this.kambariu_sk;
      return this.butai.filter(function(post){
        return (post.title.includes(adresas)) || ((post.kambariu_sk == kambariu_sk));
        // if (kambariu_sk === '') {
        //   return post.title.includes(adresas);
        // } else {
        //   return post.title.includes(adresas) && (post.kambariu_sk == kambariu_sk);
        // }
      })
    }
  }
})