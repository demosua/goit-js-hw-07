import { galleryItems } from './gallery-items.js';
// Change code below this line
const galeryEl = document.querySelector(".gallery");
//створюємо розмітку при завантаженні сторінки
const markup = galleryItems.map(({ original, preview, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
    </li>`

).join('');
//додаємо розмітку до цільового елементу DOM
galeryEl.insertAdjacentHTML('beforeend', markup);

const gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});

//цей рядок був з самого початку
console.log(galleryItems);
