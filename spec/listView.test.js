import ListView from '../src/listView';
import List from '../src/list';
import Article from '../src/article';

/*
I need a mock that can receive listArticles and return an array of objects such that { read: "url I've made up" }
*/

describe('listView', () => {
  const list = new List(Article);
  const view = new ListView();

  it('returns a single placeholder <li> thing for no links', () => {
    const emptyUl = '<ul><li>No articles here yet</li><ul>';
    expect(view.formatHTML(list)).toEqual(emptyUl);
  });

  it('returns an HTML string of links from formatHTML()', () => {
    const url = 'http://www.guardian.com/article';
    const anotherUrl = 'http://www.guardian.com/article2';
    const html = `<ul><li><a href=\"${url}\"></a></li><li><a href=\"${anotherUrl}\"></a></li></ul>`;

    list.addArticle(url);
    list.addArticle(anotherUrl);

    expect(view.formatHTML(list)).toEqual(html);
  });
});
