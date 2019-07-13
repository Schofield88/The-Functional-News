import ListView from '../src/listView';
import List from '../src/list';
import Article from '../src/article';

/*
I need a mock that can receive listArticles and return an array of objects such that { read: "url I've made up" }
*/

describe('listView', () => {
  it('returns an HTML string of links from formatHTML()', () => {
    const url = 'http://www.guardian.com/article';
    const anotherUrl = 'http://www.guardian.com/article2';
    const html = `<ul><li><a href=\"${url}\"></a></li><li><a href=\"${anotherUrl}\"></a></li></ul>`;

    const list = new List(Article);
    list.addArticle(url);
    list.addArticle(anotherUrl);
    const view = new ListView();

    expect(view.formatHTML(list)).toEqual(html);
  });
});
