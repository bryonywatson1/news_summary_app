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

  ArticleController.prototype.createArticle = function(headline, content, picture) {
    var controller = this;
    this.allHeadlines.forEach(function(article) {
      controller.articleList.createArticle(article.webTitle, content, article.fields.thumbnail);
    })
  };

  ArticleController.prototype.convertToHTML = function() {
    return this.articleListView.returnHTML();
  };

  ArticleController.prototype.getNews = function() {
    this.allHeadlines = this.todaysNews.xhr.guardianNews.response.results;
  }

  exports.ArticleController = ArticleController;
})(this);
