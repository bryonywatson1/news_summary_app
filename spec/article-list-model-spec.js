describe("ArticleList", function() {
  var articleList;

  beforeEach(function() {
    articleList = new ArticleList();
  });

  it("should have an array for storing articles", function() {
    expect(articleList.showArticles()).toEqual([]);
  });

  it("should be able to create an article", function() {
    articleList.createArticle("HEADLINE", "Content");
    expect(articleList.showArticles().length).toEqual(1);
  });

});
