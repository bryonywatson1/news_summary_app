describe("Article", function (){
  var article;

  beforeEach(function() {
    article = new Article("Headline", "Content");
  })

  it("should take a headline upon instantiation", function() {
    expect(article.headline).toEqual("Headline");
  })

  it("should take content upon instantiation", function() {
    expect(article.content).toEqual("Content");
  })
})
