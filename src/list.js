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
    const readArticle = newArticle.read();
    console.log(readArticle);
    this.articleArray.push(newArticle.read());
  }
}

module.exports = List;
