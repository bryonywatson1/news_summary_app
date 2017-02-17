describe("Article", function() {
  var article;

  beforeEach(function() {
    article = new Article("HEADLINE", "Content");
  });

  it("should take a headline upon instantiation", function() {
    expect(article.showHeadline()).toEqual("HEADLINE");
  });

  it("should take content upon instantiation", function() {
    expect(article.content).toEqual("Content");
  });
})
