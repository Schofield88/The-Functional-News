const Article = require('../src/article');
const List = require('../src/list');
const ListView = require('../src/listView');
const NewsCall = require('../src/newsCall');

exports.thisIsTheNews = (req, res, next) => {
  const list = new List(Article);
  const view = new ListView();
  const news = new NewsCall();

  news
    .getNews()
    .then((newsArray) => {
      newsArray.forEach(article => list.addArticle({ webTitle: article.webTitle, webUrl: article.webUrl }));
    })
    .then(() => list.listArticles())
    .then((arrayOfArticles) => {
      console.log(arrayOfArticles);
      res.render('index', {
        title: 'Stand by for the news',
        news: arrayOfArticles,
      });
    });
};
