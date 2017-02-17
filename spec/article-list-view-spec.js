describe("ArticleListView", function(){

  var articleListView;
  var articleListDouble;

  beforeEach(function(){
    articleListDouble = jasmine.createSpyObj('articleList', ['showArticles', 'createArticle']);
    articleListView = new ArticleListView(articleListDouble);
  })

  it("should take an article list model upon instantiation", function() {
    expect(articleListView.articleList).toEqual(articleListDouble);
  })

})
