(function(exports) {

  function ArticleController(){
    this.articleList = new ArticleList();
    this.articleListView = new ArticleListView(this.articleList);
    this.todaysNews = new TodaysNews();
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

  ArticleController.prototype.getNews = function() {
    return this.todaysNews.xhr.guardianNews.response.results[0].webTitle;
  }

  exports.ArticleController = ArticleController;
})(this);
