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
  // console.log(element);

  const bigPictureUrl = element.dataset.source; //* 2.1 Отримання великого зображення
  //* 4 Відкриття модального вікна та п.5 - Заміна значення атрибутів

  const instance = basicLightbox.create(`
    <img src="${bigPictureUrl}" width="1280" >
`);

  instance.show();
  document.addEventListener('keydown', onKeyPress);
}

//*6.1 Вішаю слухача подій на документ для клавішної події

function onKeyPress(e) {
  if (e.code === 'Escape') {
    document.removeEventListener('keydown', onKeyPress);
  } else {
    return;
  }
  const largePicture = document.querySelector('.basicLightbox');
  if (largePicture) {
    largePicture.remove();
  }
  console.log(e);
}
