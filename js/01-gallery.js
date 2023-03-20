import { galleryItems } from './gallery-items.js';
// Change code below this line
//створюємо елемент галереї
const galeryEl = document.querySelector(".gallery");
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

galeryEl.onclick = (e) => {
//забороняємо дії за замовчуванням (перехід за посиланням)
    e.preventDefault();
//фільтр по таргету - створюємо модалку тільки при кліці на елемент галереї
    if (e.target === e.currentTarget) { return }
//беремо посилання на велику картинку з дата атрибута таргета
    const imgLink = e.target.dataset.source;
//об'являємо змінну для html контенту модалки 
	const html = `<img src="${imgLink}" width="800" height="600">`
//створюємо модалку з картинкою згідно специфікації бібліотеки basicLightbox
    const instance = basicLightbox.create(html, {
//при показі модального вікна виконуємо функцію
        onShow: (instance) => {
// вішаємо слухача подій для закриття модального вікна по натисканню клавіші 'Escape'
            window.addEventListener('keydown', (e) => {
//присвоюємо коду Ескейпу константу
                const ESC_KEY_CODE = 'Escape';
//якщо код натиснутої клавіші співпадає з константою Ескейп - визиваємо метод бібліотеки close()
                    if(e.code === ESC_KEY_CODE) {
                        instance.close();
                    }
            });
        },
        onClose: (instance) => {
//перед закриттям модального вікна знімаємо слухача подій з window 
            window.removeEventListener('keydown', () => {});
        }
	})
//показуємо модальне вікно із зображенням.
    instance.show();
}
// цей рядок був з самого початку
console.log(galleryItems);
