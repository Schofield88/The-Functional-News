const fetch = require('node-fetch');

class NewsCall {
  constructor() {
    this.apiRequest = 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=politics';
  }

  getNews() {
    const request = this.apiRequest;
    return fetch(request)
      .then(response => response.json())
      .then(news => news.response.results);
  }

  // This is just a demonstration of what to do with the API call
  logNews() {
    this.getNews().then((news) => {
      news.forEach(article => console.log(article.webTitle));
    });
  }
}

module.exports = NewsCall;
