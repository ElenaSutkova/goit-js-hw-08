// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "/node_modules/simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
// Отримуємо доступ до ul
const container = document.querySelector('.gallery');
container.insertAdjacentHTML('afterbegin', galleryLayout(galleryItems));
// Делегування подій 
container.addEventListener('click', handlerClick);
// Створюємо розмітку
function galleryLayout(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      alt="${description}" />
   </a>
</li>`).join('');
}
// Створюємо функцію прослуховувача подій
function handlerClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
}

// // Модальне вікно
// const galleryLightbox = new SimpleLightbox('.gallery a', { 
//     captionsData: "alt",
//     captionDelay: 250,
// });

// galleryLightbox.on('show.simplelightbox');

new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
});