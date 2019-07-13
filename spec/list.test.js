import List from '../src/list';

describe('List', () => {
  const articleMock = jest.fn().mockName('Article');
  const list = new List(articleMock);

  it('returns an array of objects with listArticles()', () => {
    expect(list.listArticles()).toEqual([]);
  });

  it('adds a new article model with addArticle()', () => {
    const articleURL = 'http://www.guardian.com/article';

    list.addArticle(articleURL);

    expect(articleMock).toHaveBeenCalledWith(articleURL);
    expect(list.listArticles()).toHaveLength(1);
  });
});
