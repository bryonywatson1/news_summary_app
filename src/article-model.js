(function(exports) {

function Article(headline, content){
this._headline = headline;
this.content = content;
}

Article.prototype.showHeadline =function(){
  return this._headline;
}


exports.Article = Article;
})(this);
