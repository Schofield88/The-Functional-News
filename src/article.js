class Article {
  constructor(url) {
    this.article = url;
  }

  read() {
    return this.article;
  }
}

module.exports = Article;
