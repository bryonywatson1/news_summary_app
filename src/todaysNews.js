(function(exports){
  function TodaysNews(){

  TodaysNews.prototype.getNews = function() {
    this.xhr = new XMLHttpRequest();
    this.xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all&from-date=2016-02-20", true);
    this.xhr.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        this.guardianNews = JSON.parse(this.responseText);
        console.log(this.guardianNews);
      }
    }
    this.xhr.send();
  }


  }
  exports.TodaysNews = TodaysNews;
})(this);
