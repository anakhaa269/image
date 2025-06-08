const thumbnails = document.querySelectorAll('.thumbnails img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    popup.classList.remove('hidden');
    popupImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

popup.addEventListener('click', (e) => {
  if (e.target !== popupImg && e.target !== closeBtn) {
    popup.classList.add('hidden');
  }
});
