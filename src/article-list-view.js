(function(exports){

  function ArticleListView(articleList){
    this.articleList = articleList;
  }

ArticleListView.prototype.returnHTML = function(){
  var htmlString = ""
  var startString = "<ul>"
  this.articleList.showArticles().forEach(function(article){
    htmlString += `<li><div>${article.showContent()}</div></li>`
  })
  return startString + htmlString + "</ul>"

}


exports.ArticleListView = ArticleListView;
})(this);
