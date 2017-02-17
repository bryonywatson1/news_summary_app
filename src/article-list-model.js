(function(exports) {

  function ArticleList() {
    this._articles = [];
  };

  ArticleList.prototype.showArticles = function() {
    return this._articles;
  };

  exports.ArticleList = ArticleList;
})(this);
