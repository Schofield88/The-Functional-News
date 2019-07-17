import List from '../src/list';

describe('List', () => {
  const articleMock = jest.fn().mockName('Article');

  const list = new List(articleMock);

  it('returns an array of objects with listArticles()', () => {
    expect(list.listArticles()).toEqual([]);
  });

  it('adds a new article model with addArticle()', () => {
    const articleObject = {
      webTitle: 'Today in the news',
      webUrl: 'http://www.guardian.com/article',
    };

    list.addArticle(articleObject);

    expect(articleMock).toHaveBeenCalledWith(articleObject);
    expect(list.listArticles()).toHaveLength(1);
  });
});
