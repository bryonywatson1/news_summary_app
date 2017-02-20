(function(exports) {

  function ArticleController(){
    this.articleList = new ArticleList();
    this.articleListView = new ArticleListView(this.articleList);
  }

  ArticleController.prototype.showListOfArticles = function() {
    var news = document.getElementById("app");
    news.innerHTML = this.convertToHTML();
  }

  ArticleController.prototype.createArticle = function(headline, content) {
    this.articleList.createArticle(headline, content);
  };

  ArticleController.prototype.convertToHTML = function() {
    return this.articleListView.returnHTML();
  };

  exports.ArticleController = ArticleController;
})(this);
