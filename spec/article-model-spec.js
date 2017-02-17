describe("Article", function (){
  var article;

  beforeEach(function() {
    article = new Article("Headline");
  })

  it("should take a headline upon instantiation", function() {
    expect(article.headline).toEqual("Headline");
  })
})
