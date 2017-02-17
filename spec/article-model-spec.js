describe("Article", function (){
  var article;

  beforeEach(function() {
    article = new Article("Headline", "Content");
  })

  it("should take a headline upon instantiation", function() {
    expect(article.showHeadline()).toEqual("Headline");
  })

  it("should take content upon instantiation", function() {
    expect(article.showContent()).toEqual("Content");
  })

})
