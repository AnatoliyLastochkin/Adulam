class PopupMap {
  constructor(element, links) {
    this.element = element;
    this.links = links;

    this.render();

    this.links.forEach((link) => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.element.classList.add('modal-open');
      });
    });

    const modalClose = this.element.querySelector('.modal-close');
    modalClose.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.element.classList.remove('modal-open');
    });

    window.addEventListener('keydown', (evt) => {
      evt.preventDefault();

      const escButton = 27;
      if (evt.keyCode === escButton) {
        if (this.element.classList.contains('modal-open')) {
          this.element.classList.remove('modal-open');
        }
      }
    });
  }

  render() {
    this.element.innerHTML = `
      <h2 class="visually-hidden">Сomo llegar a nuestra oficina</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.4761224853!2d-6.131393959805904!3d36.66305178266425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dc65d8a47c675%3A0xb349ff1d3ca676c0!2sAv.%20Alcalde%20Cantos%20Ropero%2C%2050%2C%2011408%20Jerez%20de%20la%20Frontera%2C%20C%C3%A1diz!5e0!3m2!1sru!2ses!4v1567443547335!5m2!1sru!2ses" width="960" height="580" allowfullscreen=""></iframe>
      <p><img src="./img/map.png" width="960" height="580" alt="the address of the office"></p>
      <button class="modal-close" type="button">close</button>    
    `;
  }
}

// eslint-disable-next-line no-new
new PopupMap(
  document.querySelector('.modal-map'),
  document.querySelectorAll('.contacts-button-map'),
);
