(function(exports){

function ArticleList(){
this._articles = []
}
ArticleList.prototype.showArticles = function(){
  return this._articles;
}

ArticleList.prototype.createArticle = function(headline,content){
  this._articles.push(new Article(headline,content));
}


  exports.ArticleList = ArticleList;
})(this);
