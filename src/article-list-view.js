(function(exports){

  function ArticleListView(articleList){
    this.articleList = articleList;
  }

ArticleListView.prototype.returnHTML = function(){
return `<ul><li><div>${this.articleList.showArticles()[0].showContent()}</div></li>`
}


exports.ArticleListView = ArticleListView;
})(this);
