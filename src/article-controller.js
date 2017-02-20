(function(exports) {

  function ArticleController(){
    this.articleList = new ArticleList();
  }

  ArticleController.prototype.replaceText = function() {
    var news = document.getElementById("app");
    greeting.innerHTML = "Article"
  }

  ArticleController.prototype.createArticle = function(headline, content) {
    this.articleList.createArticle(headline, content);
  };

  exports.ArticleController = ArticleController;
})(this);
