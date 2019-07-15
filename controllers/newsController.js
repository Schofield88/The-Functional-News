const Article = require('../src/article');
const List = require('../src/list');
const ListView = require('../src/listView');
const NewsCall = require('../src/newsCall');

exports.thisIsTheNews = (req, res, next) => {
  const list = new List(Article);
  const view = new ListView();
  const news = new NewsCall();

  news.getNews()
    .then((newsArray) => {
      newsArray.forEach(article => list.addArticle(article.webUrl));
    })
    .then(() => view.formatHTML(list))
    .then(listOfUrls => res.send(listOfUrls));
  // res.render('index');
};
