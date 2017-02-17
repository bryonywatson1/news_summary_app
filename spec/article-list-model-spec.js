describe("ArticleList", function() {
  var articleList;

  beforeEach(function() {
    articleList = new ArticleList();
  })

  it("should have an array for storing articles", function() {
    expect(articleList.showArticles()).toEqual([]);
  })

  it("should create an article", function() {
    articleList.createArticle("Headline", "Content")
    expect(articleList.showArticles().length).toEqual(1);
  })
});
