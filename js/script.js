const $  = (e) => document.querySelector(e),
      $$ = (e) => document.querySelectorAll(e);

function engines () {
  return {
    g: ['https://google.com/search?q=', 'Google'],
    gh: ['https://github.com/search?q=', 'Github'],
    so: ['https://stackoverflow.com/search?q=', 'StackOverflow'],
    d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
    y: ['https://youtube.com/results?search_query=', 'Youtube'],
    w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
  };
}

const { parse, stringify } = JSON;

const nodes = (elem) =>
      Array.prototype.slice.call($(elem).children);

var place = localStorage.place || 'West Lafayette';

$('.weather .edit').onclick = () =>
  $('.weather-config').classList.add('show');

$('.weather-config input').onkeyup = (e) => {
  if (e.key == 'Enter') {
    localStorage.place = e.target.value;
    window.location.reload();
  }
  else if (e.keyCode == 27)
    e.target.parentNode.classList.remove('show');
};

(function () {
  if (localStorage.getItem("todo") === null)
    localStorage.todo = '[]';
})();

new Todo().display;
new Weather(place).getWeather;
new Powerline();
