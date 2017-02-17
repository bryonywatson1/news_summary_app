describe("ArticleListView", function(){

  var articleListView;
  var articleList;

  beforeEach(function(){
    articleList = new ArticleList();
    articleListView = new ArticleListView(articleList);
  })

  it("should take an article list model upon instantiation", function() {
    expect(articleListView.articleList).toEqual(articleList);
  })

  it("should return a string of HTML", function() {
    articleList.createArticle("Headline","Content")
    expect(articleListView.returnHTML()).toEqual("<ul><li><div>Content</div></li></ul>")
  })

  it("should return a string of HTML for mutiple articles in the list", function() {
    articleList.createArticle("Headline", "Content")
    articleList.createArticle("Headline2", "Content2")
    expect(articleListView.returnHTML()).toEqual("<ul><li><div>Content</div></li><li><div>Content2</div></li></ul>")
  })

})
