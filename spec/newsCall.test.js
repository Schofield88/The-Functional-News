const NewsCall = require('../src/newsCall');

describe('NewsCall', () => {
  it('getNews() returns an array of the news', () => {
    const response = {
      response: {
        status: 'ok',
        userTier: 'developer',
        total: 102081,
        startIndex: 1,
        pageSize: 10,
        currentPage: 1,
        pages: 10209,
        orderBy: 'newest',
        results: [
          {
            id:
							'politics/blog/live/2019/jul/15/tory-leadership-latest-news-boris-johnson-liam-fox-dismisses-boris-johnsons-plans-for-us-uk-trade-deal-as-unrealistic-live-news',
            type: 'liveblog',
            sectionId: 'politics',
            sectionName: 'Politics',
            webPublicationDate: '2019-07-15T13:31:20Z',
            webTitle: 'Brexit happens, hilarity ensues',
            webUrl: 'https://www.thelulz.com/politics/blog/live/2019/jul/15/brexit-lulz',
            apiUrl:
							'https://content.guardianapis.com/politics/blog/live/2019/jul/15/tory-leadership-latest-news-boris-johnson-liam-fox-dismisses-boris-johnsons-plans-for-us-uk-trade-deal-as-unrealistic-live-news',
            isHosted: false,
            pillarId: 'pillar/news',
            pillarName: 'News',
          },
        ],
      },
    };

    const news = new NewsCall();
    news.makeTheCall = jest.fn().mockImplementation(() => Promise.resolve(response));
    const myNews = news.getNews().then((data) => {
      const newsObject = data[0];
      expect(newsObject).toHaveProperty('webTitle');
      expect(newsObject).toHaveProperty('webUrl');
      expect(newsObject).toHaveProperty('sectionName', 'Politics');
    });

    expect(news.makeTheCall).toHaveBeenCalled();
  });
});
