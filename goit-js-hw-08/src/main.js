import images from "./gallery-items.js";
// console.log(images);

const gallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const modalImg = document.querySelector('img.lightbox__image');
const closeBtn = document.querySelector('[data-action="close-lightbox"]')
const overlay = document.querySelector('.lightbox__content')

gallery.addEventListener('click', openImageByClick);
closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', overlayClose)
//* Создание и рендер разметки по массиву данных и предоставленному
//* шаблону.
//* Ссылка на оригинальное изображение должна храниться в data - атрибуте
//* source на элементе img, и указываться в href ссылки.
const galleryItems = images.map((image) => createGalleryItem(image)).join("");
gallery.insertAdjacentHTML("beforeend", galleryItems);

function createGalleryItem (image){
    return `<li class="gallery__item">
    <a
      class="gallery__link"
      href=${image.original}
    >
      <img
        class="gallery__image"
        src=${image.preview}
        data-source=${image.original}
        alt=${image.description}
      />
    </a>
  </li>`;
  }

//* - Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого
//*   изображения.

function openImageByClick (event) {
    event.preventDefault();

    if(event.target.nodeName !== "IMG") return;
    const originalImageUrl = event.target.dataset.source;

    // * Открытие модального окна по клику на элементе галереи.
    modal.classList.add('is-open');
    window.addEventListener("keydown", modalEscape);//!добавляем слушателя на окно 
    
    //* - Подмена значения атрибута `src` элемента `img.lightbox__image`.
    modalImg.src = originalImageUrl;
}

//* - Закрытие модального окна по клику на кнопку
//*   `button[data-action="close-modal"]`.
function closeModal () {
    modal.classList.remove('is-open');

    window.removeEventListener("keydown", modalEscape);

//* - Очистка значения атрибута `src` элемента `img.lightbox__image`. Это необходимо
//*   для того, чтобы при следующем открытии модального окна, пока грузится
//*   изображение, мы не видели предыдущее.
    modalImg.src = "";
}

// * Закрытие модального окна по нажатию клавиши ESC.
function modalEscape(e) {
    if (e.key === "Escape") {
      closeModal();
    }
}

//* - Закрытие модального окна по клику на `div.lightbox__overlay`.
function overlayClose(event) {
    if (event.target.nodeName !== "IMG") {
      closeModal();
    }
  }

//* - Пролистывание изображений галереи в открытом модальном окне клавишами "влево"
//*   и "вправо".