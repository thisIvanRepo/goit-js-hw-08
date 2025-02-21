import gallery from './render-images.js';

gallery.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        return;
    }

    const modalImage = basicLightbox.create(`
    <img class ="image-modal" src="${event.target.dataset.source}"></img>
  `);

    modalImage.show();
});

// I should leave this here.
// <div class ="arrow-left"></div>
//      <img class ="image-modal" src="${event.target.dataset.source}"></img>
//    <div class ="arrow-right"></div>
