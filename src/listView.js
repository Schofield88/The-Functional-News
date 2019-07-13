export default class ListView {
  constructor() {
    this.html = '';
  }

  formatHTML(listInstance) {
    const articleArray = listInstance.listArticles();
    const urlsArray = articleArray.map(
      article => `<li><a href="${article.read()}"></a></li>`,
    );
    const joinedString = urlsArray.join('');
    const unorderedString = `<ul>${joinedString}</ul>`;
    this.html = unorderedString;
    return this.html;
  }
}
