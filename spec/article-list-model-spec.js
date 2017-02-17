describe("ArticleList", function() {
  var articleList;

  beforeEach(function() {
    articleList = new ArticleList();
  });

  it("should have an array for storing articles", function() {
    expect(articleList.showArticles()).toEqual([]);
  });

});
