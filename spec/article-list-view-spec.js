describe("ArticleListView", function() {
  var articleListView;
  var articleList;

  beforeEach(function() {
    articleList = new ArticleList();
    articleListView = new ArticleListView(articleList);
  });

  it("should take an article list model upon instantiation", function() {
    expect(articleListView.articleList).toEqual(articleList);
  });

  it("should return an HTML string with the article's headline and content", function() {
    articleList.createArticle("HEADLINE", "Content", "picture");
    expect(articleListView.returnHTML()).toEqual('<ul><li><div>HEADLINE</div><div>Content</div><div><img src="picture"></div></li></ul>')
  });

  it("should return a string of HTML for multiple articles", function() {
    articleList.createArticle("HEADLINE1", "Content1", "picture");
    articleList.createArticle("HEADLINE2", "Content2", "picture");
    expect(articleListView.returnHTML()).toEqual('<ul><li><div>HEADLINE1</div><div>Content1</div><div><img src="picture"></div></li><li><div>HEADLINE2</div><div>Content2</div><div><img src="picture"></div></li></ul>')
  });
});
