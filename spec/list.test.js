import List from '../src/list';

describe('List', () => {
  const list = new List();

  it('returns an array of objects with listArticles()', () => {
    expect(list.listArticles()).toEqual([]);
  });
});
