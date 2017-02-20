(function(exports) {

  function ArticleList() {
    this._articles = [];
  };

  ArticleList.prototype.showArticles = function() {
    return this._articles;
  };

  ArticleList.prototype.createArticle = function(headline, content, picture) {
     this._articles.push(new Article(headline, content, picture));
  };

  exports.ArticleList = ArticleList;
})(this);
