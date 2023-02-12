import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

//*1.1 Знаходжу елемент галареї
const galleryEl = document.querySelector('.gallery');

//* 1.3 Створюю функцію, яка створює шаблон
function createsMarkup(array) {
  return array
    .map(element => {
      return `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', createsMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  loop: true,
});
