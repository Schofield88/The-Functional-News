export default class ListView {
  constructor() {
    this.html = '<ul><li>No articles here yet</li><ul>';
  }

  formatHTML(listInstance) {
    // make sure there are actually articles in the List
    if (listInstance.listArticles().length === 0) return this.html;
    // generate an array of url strings
    const articleArray = listInstance.listArticles();
    // map a new array to wrap the urls in <li> and <a> tags
    const urlsArray = articleArray.map(
      article => `<li><a href="${article.read()}"></a></li>`,
    );
    // join the array together and wrap the whole string in <ul> tags
    const unorderedString = `<ul>${urlsArray.join('')}</ul>`;
    this.html = unorderedString;
    return this.html;
  }
}
