'use strict';

import images from './images.js';

const listImages = document.querySelector('.gallery');

const markupItemsImages = images
    .map((image) => getHtmlLiImages(image))
    .join('');

listImages.innerHTML = markupItemsImages;

function getHtmlLiImages(image) {
    const { preview, original, description } = image;

    return `<li class="gallery-item">
              <a class="gallery-link" href="#">
                <img
                  class="gallery-image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                  />
              </a>
            </li>`;
}

export default listImages;
