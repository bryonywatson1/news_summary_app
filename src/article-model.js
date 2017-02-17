(function(exports) {

  function Article(headline, content) {
    this._headline = headline;
    this._content = content;
  };

  Article.prototype.showHeadline = function() {
    return this._headline;
  };

  Article.prototype.showContent = function() {
    return this._content;
  };

  exports.Article = Article;
})(this);
