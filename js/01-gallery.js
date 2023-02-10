import { galleryItems } from './gallery-items.js';
// Change code below this line
const exampleArray = [1, 2, 3, 4, 5];
//* 1. Створення і рендер розмітки на підставі масиву даних galleryItems і
//* наданого шаблону елемента галереї.

const divGalleryEl = document.querySelector('.gallery'); //* 1.1 Знаходжу посилання на Галерею
divGalleryEl.addEventListener('click', onImgPreviewClick); //* 1.2 Вішаю слухача подій

const galleryMarkup = createsMarkup(galleryItems); //* 1.3 Створюю шаблон (змінну)

//* 1.4 Функція для створення шаблонів
function createsMarkup(images) {
  return images
    .map(e => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${e.original}">
      <img
        class="gallery__image"
        src="${e.preview}"
         data-source="${e.original}"
        alt="${e.description}"
      />
    </a>
  </div>`;
    })
    .join('');
}

divGalleryEl.insertAdjacentHTML('beforeend', galleryMarkup); //* 1.5 Парсинг Шаблону в html

function onImgPreviewClick(ev) {
  ev.preventDefault(); // Вимикаю дефолтну поведінку посилання

  const element = ev.target;
  if (element.nodeName !== 'IMG') {
    return;
  }

  const bigPictureUrl = element.dataset.source; //* 2.1 Отримання великого зображення
  console.log(bigPictureUrl);

  const instance = basicLightbox.create(`
    <img src="${bigPictureUrl}" width="800" height="600">
`);

  instance.show();
}

// function getUrl() {
//   return element.dataset.source;
// }

//* ПРИКЛАД ОЛЕНИ
// //посилання на контейнер <div class="gallery"></div>
// const galleryBox = document.querySelector('.gallery');

// // додає розмітку галереї в контейнер
// galleryBox.insertAdjacentHTML(
//   'beforeend',
//   createImgGalleryMarkup(galleryItems),
// );

// galleryBox.addEventListener('click', event => {
//   //зображення обгорнуте посиланням, по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку
//   // preventDefault забороняє цю поведінку за замовчуванням.
//   event.preventDefault();
// });

// // створює розмітку галереї за шаблоном з об'єкта galleryItems
// function createImgGalleryMarkup(images) {
//   return images
//     .map(({ original, preview, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//    class="gallery__image"
//    src="${preview} "
//    data-source="${original}"
//    alt="${description}"
//     />
//   </a>
//    </div>`;
//     })
//     .join('');
// }
