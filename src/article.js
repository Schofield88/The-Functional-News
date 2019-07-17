class Article {
  constructor(urlObject) {
    this.article = urlObject;
  }

  read() {
    return this.article;
  }
}

module.exports = Article;
