import Article from '../src/article';

describe('Article', () => {
  it('has read() that returns its URL as a string', () => {
    const url = 'http://www.guardian.com/article';
    const article = new Article(url);
    const articleURL = article.read();

    expect(articleURL).toEqual(expect.stringMatching(url));
  });
});
