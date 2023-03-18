import { galleryItems } from './gallery-items.js';
// Change code below this line
const galeryEl = document.querySelector(".gallery");
// Створюємо глобальну змінну для модального вікна з зображенням basicLightbox
let instance;
//створюємо розмітку при завантаженні сторінки
const markup = galleryItems.map(({ original, preview, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </li>`

).join('');
//додаємо розмітку до цільового елементу DOM
galeryEl.insertAdjacentHTML('beforeend', markup);
//встановлюємо слухача подій на батьківський (цільовий елемент розмітки)
galeryEl.addEventListener('click', onClick);
//оброблюємо подію "клік". 1-забороняємо дії за замовчуванням (перехід за посиланням)
// 2 - показуємо модальне вікно із зображенням.
// 3 - вішаємо слухача подій для закриття модального вікна по натисканню клавіші 'Escape'
function onClick(e) {
    e.preventDefault();
    onShowModal(e);
    window.addEventListener('keydown', onEscKeyPress);
}
//створюємо елемент - атрибут data-source таргета
//присвоюємо змінній instance значення використовуючи синтаксис basicLightbox.create
//використовуєм синтаксис бібіліотеки basicLightbox для показу модального вікна із зображенням
function onShowModal(e) {
    const imgLink = e.target.dataset.source;
        instance = basicLightbox.create(`<img src="${imgLink}" width="800" height="600">`);
        instance.show();
}
//перевіряємо чи співпадає код клавіші коду клавіші Escape, при виконанні умови викликаємо функцію закриття
function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    if(e.code === ESC_KEY_CODE) {
        onCloseModal()
    }
}
//використовуємо глобальну змінну instance та синтаксис бібліотеки basicLightbox
//знімаємо слухача подій з вікна.
function onCloseModal() {
    instance.close();
    window.removeEventListener('keydown', onEscKeyPress);
}
//цей рядок був з самого початку
console.log(galleryItems);
