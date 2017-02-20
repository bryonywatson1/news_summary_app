(function(exports) {

  function Article(headline, content, picture) {
    this._headline = headline;
    this._content = content;
    this._picture = picture
  };

  Article.prototype.showHeadline = function() {
    return this._headline;
  };

  Article.prototype.showContent = function() {
    return this._content;
  };

  Article.prototype.showPicture = function() {
    return this._picture;
  };


  exports.Article = Article;
})(this);
