(function(exports) {

  function ArticleListView(articleList) {
    this.articleList = articleList;
  };

  ArticleListView.prototype.returnHTML = function() {
    var htmlString = ""
    var startString = "<ul>"
    var endString = "</ul>"
    this.articleList.showArticles().forEach(function(article) {
      htmlString += `<li><div>${article.showHeadline()}</div><div>${article.showContent()}</div></li>`
    });
    return startString + htmlString + endString;
  };

  exports.ArticleListView = ArticleListView;
})(this);
