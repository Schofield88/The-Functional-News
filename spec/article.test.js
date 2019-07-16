import Article from '../src/article';

describe('Article', () => {
  it('has read() that returns its URL as a string', () => {
    const articleObject = {
      webTitle: 'Today in the news',
      webUrl: 'http://www.guardian.com/article',
    };
    const article = new Article(articleObject);
    const articleURL = article.read();

    expect(articleURL).toEqual(expect.objectContaining(articleObject));
  });
});
