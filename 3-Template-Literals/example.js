'use strict'

var article = {
  title: 'Hello Template Literals',
  teaser: 'String interpolation is awesome. Here are some features',
  body: 'Lots and lots of sanitized HTML',
  tags: ['es6', 'template-literals', 'es6-in-depth']
}
var {title,teaser,body,tags} = article
var html = `<article>
  <header>
    <h1>${title}</h1>
  </header>
  <section>
    <div>${teaser}</div>
    <div>${body}</div>
  </section>
  <footer>
    <ul>
      ${tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
    </ul>
  </footer>
</article>`

console.log(html)


const bestBondSongs = (
`Goldfinger
Live and Let Die
Nobody Does It Better`);
console.log(bestBondSongs)
