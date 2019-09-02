'use strict';

function popupMap() {

  const mapLinks = document.querySelectorAll('.contacts-button-map');

  const popupMap = document.querySelector('.modal-map');
  const mapClose = popupMap.querySelector('.modal-close');

  mapLinks.forEach(link =>{
    link.addEventListener('click', evt => {
      evt.preventDefault();
      popupMap.classList.add('modal-open');
    });
  });


  mapClose.addEventListener('click', evt => {
    evt.preventDefault();
    popupMap.classList.remove('modal-open');
  });

  window.addEventListener('keydown', evt => {
    evt.preventDefault();
    const escButton = 27;

    if (evt.keyCode === escButton) {
      if (popupMap.classList.contains('modal-open')) {
        popupMap.classList.remove('modal-open');
      }
    }
  })
}

popupMap();