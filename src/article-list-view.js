(function(exports) {

  function ArticleListView(articleList) {
    this.articleList = articleList;
  };

  ArticleListView.prototype.returnHTML = function() {
    return `<ul><li><div>${this.articleList.showArticles()[0].showHeadline()}</div><div>${this.articleList.showArticles()[0].showContent()}</div></li></ul>`
  };

  exports.ArticleListView = ArticleListView;
})(this);
