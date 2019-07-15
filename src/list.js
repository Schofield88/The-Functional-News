class List {
  constructor(articleModel) {
    this.articleArray = [];
    this.article = articleModel;
  }

  listArticles() {
    return this.articleArray;
  }

  addArticle(articleURL) {
    const Article = this.article;
    const newArticle = new Article(articleURL);
    this.articleArray.push(newArticle);
  }
}

module.exports = List;
