class Powerline {
  constructor() {
    let panels = $$('#panels > ul').length;

    for (let i = 1; i <= panels; $('.indicator').innerHTML += `<li ${i++}></li>`)

    document.onkeydown = (e) => {
      if (e != undefined) {
        let key = e.key;

        if (Number.isInteger(parseInt(key)) && key <= panels) {
          this.activate('#tabs ul li', `#tabs ul li:nth-child(${key})`);
          this.activate('#panels > ul', `#panels ul:nth-child(${key})`);
        }
      }
    };

    setInterval(() => { $('.time').innerHTML = `${strftime('h:ip')}`; }, 1000);
  }

  activate(obj, item) {
    $$(obj).forEach((i) => i.removeAttribute('active'));
    $(item).setAttribute('active', '');
  };
}
