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
    articleList.createArticle("HEADLINE", "Content");
    expect(articleListView.returnHTML()).toEqual("<ul><li><div>HEADLINE</div><div>Content</div></li></ul>")
  });
});
